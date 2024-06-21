/* eslint-disable no-console */
import {
  ContentForm,
  DropDownInputList,
  Editor as EditorComponent,
  EditorPrimaryButton,
  FewOnLineElementsContainer,
  HeaderBottomButtonsContainer,
  ImageOrEmpty,
  InputField,
  InputFieldsContainer,
  Workplace,
  WorkplaceHeader,
  WorkplaceHeaderBottom,
  WorkplaceHeaderTop,
} from "hwdtech-admin-components"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Editable, ReactEditor, Slate } from "slate-react"
import ApplicationComponentsToolbar from "./ApplicationComponentsToolbar"
import Leaf from "./Slate/Leaf"
import Element from "./Slate/Element"
import editorBuilder from "../../utils/slate/editorBuilder"
import onKeyDown from "../../utils/slate/eventHandlers/onKeyDown"
import codeDecorator from "../../utils/slate/decorators/codeDecorator"
import getFieldsByElementType from "../../utils/slate/getFieldsByElementType"
import getContentFormCallback from "../../utils/slate/getContentFormCallback"
import isEmpty from "lodash/isEmpty"
import { BaseSelection, Transforms } from "slate"
import { useApplicationValueContext } from "./ApplicationContext"
import { getSiteName } from "../../utils/jsonPageBuilder/getAbsoluteUri"
import READY_MESSAGE from "../../utils/postMessage/READY_MESSAGE"
import { draftAndPublish } from "../../utils/contentful/draftAndPublish"
import { PageFields, PageFieldsNestedTypes, PageFieldsTypes } from "../../types/Slate/Components/PageFieldsTypes"
import pageMainImageLoader from "../../utils/pageMainImageLoader"
import keys from "lodash/keys"
import get from "lodash/get"
import map from "lodash/map"
import buttonActionsMap from "../../utils/buttonsData/inputFields"
import merge from "lodash/merge"
import { SaveImageHandlerProps } from "../../types/Slate/Utils/eventHandlers/ImageSaveHandlerFunc"
import sendFiletoHandler from "../../utils/slate/eventHandlers/sendFiletoHandler"
import LeafProps from "../../types/Slate/Components/LeafProps"
import ElementProps from "../../types/Slate/Components/ElementProps"
import { createArticle } from "../../utils/createArticle/createArticle"
import { LangBar } from "./LangBar"
import { useRouter } from "next/router"
import Content from "../../../common/types/Content"
import { getCard } from "../../utils/getCardAndArticle"
import { useSaveArticleWithInterval } from "../../utils/localStorage/useSaveArticleWithInterval"
import { useInitLocalStorageAndUpdateState } from "../../utils/localStorage/useInitLocalStorageAndUpdateState"
import { Modal } from "./Modal/Modal"
import { useGetArticle } from "../../utils/getArticle/useGetArticle"
import { saveCursorPosition } from "../../utils/saveCursorPosition"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { ModalSaveStatus } from "./Modal/ModalSaveStatus"

export const Application = () => {
  const actionFlag = "edit"
  const editor = useMemo(() => editorBuilder, [])
  const { value, setValue, locale } = useApplicationValueContext()
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [contentFormType, setContentFormType] = useState("")
  const [contentFormResult, setContentFormResult] = useState({})
  const [selection, setSelection] = useState<BaseSelection | undefined>(undefined)
  const renderLeaf = useCallback((props: LeafProps) => <Leaf {...props} />, [])
  const renderElement = useCallback((props: ElementProps) => <Element {...props} />, [])
  const [redirectWindow, setRedirectWindow] = useState<Window | null>()
  const [toggleModalWindow, setToggleModalWindow] = useState(false)
  const [pageFields, setPageFields] = useState<PageFieldsTypes>({
    slug: "",
    path: "",
    title: "",
    description: "",
    keywords: "",
    previewImage: "",
    bgImage: "",
    authors: "",
    firstLineLastSymbol: "",
    secondLineLastSymbol: "",
    tags: "",
    readingTime: "",
    publicationDate: "",
    reviewCount: "",
    ratingValue: "",
    worstRating: "",
    theme: "",
    effect: "",
    primaryButtonText: "",
    primaryButtonAction: "",
    arrowButtonText: "",
    arrowButtonLink: { href: "", linkTitle: "" },
    labelPrimaryText: "",
    labelUsualText: "",
    labelPrimaryLink: { href: "", linkTitle: "" },
    labelUsualLink: { href: "", linkTitle: "" },
    primaryButtonTitle: "",
    primaryButtonLink: { href: "", linkTitle: "" },
  })
  const router = useRouter()
  const [card, setCard] = useState<Content.Card>()
  const prevCursorPositionRef = useRef()
  const [cursorBuffer, setCursorBuffer] = useState({})

  const modalWindowStatus = useAppSelector((state) => state.modalWindowReducer.status)
  const dispatch = useAppDispatch()

  useEffect(() => {
    Transforms.deselect(editor)
  }, [locale])

  const setNamedPageField = (key: PageFields, value: PageFieldsNestedTypes) => {
    setPageFields((prev) => ({ ...prev, ...{ [key]: value } }))
  }

  const updateValueAndPageFields = (value: Array<object>, pageFields: Content.PageFields) => {
    setValue(value)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setPageFields((prev) => ({ ...prev, ...pageFields }))
  }

  const componentsToolbar = (
    <ApplicationComponentsToolbar
      setContentFormType={setContentFormType}
      setSelection={setSelection}
      setIsFormOpen={setIsFormOpen}
      editor={editor}
    />
  )

  const getResourceItemFromCardBySource = (card: Content.Card, locale: string): Content.SourceItem | undefined => {
    return card.resources.find((resource) => resource.source === locale)
  }

  useEffect(() => {
    const idCard = router.query.idCard
    const promiseCard = getCard(idCard)
    promiseCard.then((card) => setCard(card))
  }, [])

  useInitLocalStorageAndUpdateState(card, locale, pageFields, updateValueAndPageFields)

  useEffect(() => {
    if (!isEmpty(contentFormResult) && !isEmpty(contentFormType) && !isEmpty(selection)) {
      editor && selection && Transforms.select(editor, selection)
      const func = getContentFormCallback(contentFormType)
      if (func) {
        func({ editor, value: { ...contentFormResult } })
        setSelection(undefined)
        setContentFormResult({})
      } else console.warn(`There is no callback for ${contentFormType}`)
    }

    const sendToPreview = (event: MessageEvent) => {
      if (event.origin === getSiteName()) {
        if (event.data === READY_MESSAGE) {
          const slateValue = JSON.stringify(value)
          const fields = JSON.stringify(pageFields)
          redirectWindow?.postMessage({ slateValue, fields }, getSiteName())
        }
      }
    }
    window.addEventListener("message", sendToPreview, false)

    return () => {
      window.removeEventListener("message", sendToPreview)
    }
  }, [pageFields, editor, selection, contentFormResult, contentFormType, value, redirectWindow])

  const articleFromCard = card ? getResourceItemFromCardBySource(card, locale) : undefined

  useSaveArticleWithInterval(router.query.idCard as string, locale, {
    formDataSlateStructure: {
      contentfulFieldsType: "",
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      json: JSON.stringify(value),
      form: { ...pageFields },
      path: "",
      slug: "",
    },
    version: articleFromCard?.version ?? "000",
  })
  useGetArticle(card, locale, router, updateValueAndPageFields, setToggleModalWindow)
  const generateJsonOnClick = () => {
    const { slug, path } = pageFields
    if (!isEmpty(slug)) {
      if (!isEmpty(path)) setRedirectWindow(window.open(`/preview/${path}/${slug}`, "child"))
      else setRedirectWindow(window.open(`preview/${slug}`, "child"))
    } else console.warn("Необходимо указать как минимум slug для создания превью.")
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    prevCursorPositionRef.current = cursorBuffer
    saveCursorPosition(setCursorBuffer, prevCursorPositionRef.current, editor.selection, locale.toString())
  }, [editor.selection, locale])

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const position = cursorBuffer[locale]
    ReactEditor.focus(editor)
    if (position) {
      Transforms.select(editor, position)
    }
  }, [locale])

  return (
    <div>
      <Modal status={modalWindowStatus} changeStatus={(action: any) => dispatch(action())}>
        <ModalSaveStatus
          idCard={router.query.idCard}
          setCard={setCard}
          locale={locale}
          status={modalWindowStatus}
          updateValueAndPageFields={updateValueAndPageFields}
          changeStatus={(action: any) => dispatch(action())}
        />
      </Modal>
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
        }}
      >
        <Workplace
          settingsToolbar={<></>}
          header={
            <WorkplaceHeader
              topElements={
                <WorkplaceHeaderTop
                  center={
                    <div
                      className="lang-bar-wrapper"
                      style={{ display: "flex", justifyContent: "right", marginTop: "var(--indent-56)" }}
                    >
                      <LangBar />
                    </div>
                  }
                />
              }
              bottomElements={
                <WorkplaceHeaderBottom
                  center={
                    <InputFieldsContainer>
                      <InputField
                        value={pageFields.title}
                        setValue={(value: string) => setNamedPageField("title", value)}
                        placeholder={"Type the page title"}
                      />
                      <InputField
                        value={pageFields.description}
                        setValue={(value: string) => setNamedPageField("description", value)}
                        placeholder={"Type the page description"}
                      />
                      <FewOnLineElementsContainer>
                        <InputField
                          value={pageFields.slug}
                          setValue={(value: string) => setNamedPageField("slug", value)}
                          placeholder={"Type the page slug"}
                        />
                        <InputField
                          value={pageFields.path}
                          setValue={(value: string) => setNamedPageField("path", value)}
                          placeholder={"Type the page path"}
                        />
                      </FewOnLineElementsContainer>
                      <DropDownInputList openText={"Expand the fields"} closeText={"Collapse the fields"}>
                        <InputField
                          value={pageFields.tags}
                          setValue={(value: string) => setNamedPageField("tags", value)}
                          placeholder={"Type the page tags sep by space"}
                        />
                        <FewOnLineElementsContainer>
                          <InputField
                            value={pageFields.labelPrimaryText}
                            setValue={(value: string) => setNamedPageField("labelPrimaryText", value)}
                            placeholder={"Type the page labelPrimaryText"}
                          />
                          <InputField
                            value={pageFields.labelUsualText}
                            setValue={(value: string) => setNamedPageField("labelUsualText", value)}
                            placeholder={"Type the page labelUsualText"}
                          />
                        </FewOnLineElementsContainer>
                        {!isEmpty(pageFields.labelPrimaryText) && (
                          <FewOnLineElementsContainer>
                            <InputField
                              value={get(pageFields.labelPrimaryLink, "href")}
                              setValue={(value: string) => {
                                const newValue = merge(pageFields.labelPrimaryLink, { href: value })
                                setNamedPageField("labelPrimaryLink", newValue)
                              }}
                              placeholder={"Type the page primary link"}
                            />
                            <InputField
                              value={get(pageFields.labelPrimaryLink, "linkTitle")}
                              setValue={(value: string) => {
                                const newValue = merge(pageFields.labelPrimaryLink, { linkTitle: value })
                                setNamedPageField("labelPrimaryLink", newValue)
                              }}
                              placeholder={"Type the page primary link title"}
                            />
                          </FewOnLineElementsContainer>
                        )}
                        {!isEmpty(pageFields.labelUsualText) && (
                          <FewOnLineElementsContainer>
                            <InputField
                              value={get(pageFields.labelUsualLink, "href")}
                              setValue={(value: string) => {
                                const newValue = merge(pageFields.labelUsualLink, { href: value })
                                setNamedPageField("labelUsualLink", newValue)
                              }}
                              placeholder={"Type the page usual link"}
                            />
                            <InputField
                              value={get(pageFields.labelUsualLink, "linkTitle")}
                              setValue={(value: string) => {
                                const newValue = merge(pageFields.labelUsualLink, { linkTitle: value })
                                setNamedPageField("labelUsualLink", newValue)
                              }}
                              placeholder={"Type the page usual link title"}
                            />
                          </FewOnLineElementsContainer>
                        )}
                        <FewOnLineElementsContainer>
                          <ImageOrEmpty
                            emptyImageText={{
                              click: "Click here to add PREVIEW image",
                              loading: "Preview image is loading",
                            }}
                            node={{ url: pageFields.previewImage }}
                            saveImageHandler={async (props: Omit<SaveImageHandlerProps, "imageTypeHandler">) => {
                              const imageTypeHandler = async (props: { type: string; file: Blob }) => {
                                const { file } = props
                                const resSaveImage = await pageMainImageLoader(file)
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                setNamedPageField("previewImage", resSaveImage)
                              }
                              const { event, file, setIsLoading, setIsOpen } = props
                              await sendFiletoHandler({
                                event,
                                file,
                                setIsOpen,
                                setIsLoading,
                                imageTypeHandler,
                              })
                            }}
                            width={750}
                            height={300}
                          />
                          <ImageOrEmpty
                            emptyImageText={{
                              click: "Click here to add BGTitle image",
                              loading: "BGTitle image is loading",
                            }}
                            node={{ url: pageFields.bgImage }}
                            saveImageHandler={async (props: Omit<SaveImageHandlerProps, "imageTypeHandler">) => {
                              const imageTypeHandler = async (props: { type: string; file: Blob }) => {
                                const { file } = props
                                const resSaveImage = await pageMainImageLoader(file)
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                setNamedPageField("bgImage", resSaveImage)
                              }
                              const { event, file, setIsLoading, setIsOpen } = props
                              await sendFiletoHandler({
                                event,
                                file,
                                setIsOpen,
                                setIsLoading,
                                imageTypeHandler,
                              })
                            }}
                            width={750}
                            height={300}
                          />
                        </FewOnLineElementsContainer>
                        <InputField
                          value={pageFields.keywords}
                          setValue={(value: string) => setNamedPageField("keywords", value)}
                          placeholder={"Type the keywords"}
                        />
                        <FewOnLineElementsContainer>
                          <InputField
                            type={"number"}
                            value={pageFields.firstLineLastSymbol}
                            setValue={(value: string) => setNamedPageField("firstLineLastSymbol", value)}
                            placeholder={"Type the firstLineLastSymbol"}
                          />
                          <InputField
                            type={"number"}
                            value={pageFields.secondLineLastSymbol}
                            setValue={(value: string) => setNamedPageField("secondLineLastSymbol", value)}
                            placeholder={"Type the secondLineLastSymbol"}
                          />
                        </FewOnLineElementsContainer>
                        <FewOnLineElementsContainer>
                          <InputField
                            value={pageFields.primaryButtonText}
                            setValue={(value: string) => setNamedPageField("primaryButtonText", value)}
                            placeholder={"Type the primaryButtonText"}
                          />
                          {!get(pageFields.primaryButtonLink, "href") &&
                            !get(pageFields.primaryButtonLink, "linkTitle") && (
                              <InputField
                                value={pageFields.primaryButtonTitle}
                                setValue={(value: string) => setNamedPageField("primaryButtonTitle", value)}
                                placeholder={"Type the primaryButtonTitle"}
                              />
                            )}
                          {!get(pageFields.primaryButtonLink, "href") &&
                            !get(pageFields.primaryButtonLink, "linkTitle") && (
                              <InputField
                                placeholder={"Choose action"}
                                setValue={(value: string) => setNamedPageField("primaryButtonAction", value)}
                                value={pageFields.primaryButtonAction}
                                list={keys(buttonActionsMap)}
                                listId={"primaryButtonAction"}
                              />
                            )}
                        </FewOnLineElementsContainer>
                        {isEmpty(pageFields.primaryButtonAction) && (
                          <FewOnLineElementsContainer>
                            <InputField
                              value={get(pageFields.primaryButtonLink, "href")}
                              setValue={(value: string) => {
                                const newValue = merge(pageFields.primaryButtonLink, { href: value })
                                setNamedPageField("primaryButtonLink", newValue)
                              }}
                              placeholder={"Primary button link"}
                            />
                            <InputField
                              placeholder={"Primary button link title"}
                              setValue={(value: string) => {
                                const newValue = merge(pageFields.primaryButtonLink, { linkTitle: value })
                                setNamedPageField("primaryButtonLink", newValue)
                              }}
                              value={get(pageFields.primaryButtonLink, "linkTitle")}
                            />
                          </FewOnLineElementsContainer>
                        )}
                        {!isEmpty(pageFields.primaryButtonAction) && !isEmpty(pageFields.primaryButtonText) && (
                          <FewOnLineElementsContainer>
                            {map(get(buttonActionsMap, `${pageFields.primaryButtonAction}`), (inputData) => {
                              const attr = inputData.attr || {}
                              if (isEmpty(get(pageFields, `primaryButtonActionArgs.${inputData.name}`))) {
                                const newValue = merge(pageFields.primaryButtonActionArgs, {
                                  [inputData.name]: inputData.defaultValue,
                                })
                                setNamedPageField("primaryButtonActionArgs", newValue)
                              }
                              return (
                                <InputField
                                  key={inputData.name}
                                  placeholder={inputData.placeholder}
                                  setValue={(value: string) => {
                                    const newValue = merge(pageFields.primaryButtonActionArgs, {
                                      [inputData.name]: value,
                                    })
                                    setNamedPageField("primaryButtonActionArgs", newValue)
                                  }}
                                  value={get(pageFields, `primaryButtonActionArgs.${inputData.name}`)}
                                  type={inputData.type}
                                  {...attr}
                                />
                              )
                            })}
                          </FewOnLineElementsContainer>
                        )}
                        <InputField
                          value={pageFields.arrowButtonText}
                          setValue={(value: string) => setNamedPageField("arrowButtonText", value)}
                          placeholder={"Type the arrowButtonText"}
                        />
                        {!isEmpty(pageFields.arrowButtonText) && (
                          <FewOnLineElementsContainer>
                            <InputField
                              value={get(pageFields.arrowButtonLink, "href")}
                              setValue={(value: string) => {
                                const newValue = merge(pageFields.arrowButtonLink, { href: value })
                                setNamedPageField("arrowButtonLink", newValue)
                              }}
                              placeholder={"Type the page arrowButtonLink"}
                            />
                            <InputField
                              value={get(pageFields.arrowButtonLink, "linkTitle")}
                              setValue={(value: string) => {
                                const newValue = merge(pageFields.arrowButtonLink, { linkTitle: value })
                                setNamedPageField("arrowButtonLink", newValue)
                              }}
                              placeholder={"Type the arrowButtonLinkTitle"}
                            />
                          </FewOnLineElementsContainer>
                        )}
                        <FewOnLineElementsContainer>
                          <InputField
                            value={pageFields.theme}
                            setValue={(value: string) => setNamedPageField("theme", value)}
                            placeholder={"Type the theme name"}
                          />
                          <InputField
                            value={pageFields.effect}
                            setValue={(value: string) => setNamedPageField("effect", value)}
                            placeholder={"Type the effect name"}
                          />
                        </FewOnLineElementsContainer>
                        <InputField
                          value={pageFields.authors}
                          setValue={(value: string) => setNamedPageField("authors", value)}
                          placeholder={"Type the authors (delimiter is ',')"}
                        />
                        <FewOnLineElementsContainer>
                          <InputField
                            type={"date"}
                            value={pageFields.publicationDate}
                            setValue={(value: string) => setNamedPageField("publicationDate", value)}
                            placeholder={"Type the publicationDate"}
                          />
                          <InputField
                            value={pageFields.readingTime}
                            setValue={(value: string) => setNamedPageField("readingTime", value)}
                            placeholder={"Type the readingTime"}
                          />
                        </FewOnLineElementsContainer>
                        <FewOnLineElementsContainer>
                          <InputField
                            value={pageFields.reviewCount}
                            setValue={(value: string) => setNamedPageField("reviewCount", value)}
                            placeholder={"Type the reviewCount"}
                          />
                          <InputField
                            value={pageFields.ratingValue}
                            setValue={(value: string) => setNamedPageField("ratingValue", value)}
                            placeholder={"Type the ratingValue"}
                          />
                          <InputField
                            value={pageFields.worstRating}
                            setValue={(value: string) => setNamedPageField("worstRating", value)}
                            placeholder={"Type the worstRating"}
                          />
                          <InputField
                            value={pageFields.bestRating}
                            setValue={(value: string) => setNamedPageField("bestRating", value)}
                            placeholder={"Type the bestRating"}
                          />
                        </FewOnLineElementsContainer>
                      </DropDownInputList>
                    </InputFieldsContainer>
                  }
                  right={
                    <HeaderBottomButtonsContainer>
                      {/*<EditorPrimaryButton*/}
                      {/*  onClick={generateJsonOnClick}*/}
                      {/*  text={"Preview"}*/}
                      {/*  title={"Open preview page"}*/}
                      {/*/>*/}
                      <EditorPrimaryButton
                        onClick={async () => {
                          await createArticle(value, pageFields, locale, card!, dispatch, setCard)
                        }}
                        text={"Save"}
                        title={"Save the article"}
                      />
                      {/*<EditorPrimaryButton*/}
                      {/*  onClick={(event: React.MouseEvent) =>*/}
                      {/*    draftAndPublish(event, true, actionFlag, "draft", value, pageFields, locale)*/}
                      {/*  }*/}
                      {/*  text={"Draft"}*/}
                      {/*  title={"Make this page draft"}*/}
                      {/*/>*/}
                      {/*<EditorPrimaryButton*/}
                      {/*  onClick={(event: React.MouseEvent) =>*/}
                      {/*    draftAndPublish(event, true, actionFlag, "publish", value, pageFields, locale)*/}
                      {/*  }*/}
                      {/*  text={"Publish"}*/}
                      {/*  title={"Publish this page"}*/}
                      {/*/>*/}
                    </HeaderBottomButtonsContainer>
                  }
                />
              }
            />
          }
          right={componentsToolbar}
          center={
            <EditorComponent>
              <Editable
                renderLeaf={renderLeaf}
                renderElement={renderElement}
                onKeyDown={(event) => onKeyDown(event, editor)}
                decorate={([node, path]) => codeDecorator(editor, node, path)}
                spellCheck={false}
                autoCorrect="false"
                autoCapitalize="false"
              />
            </EditorComponent>
          }
        />
      </Slate>
      {isFormOpen && (
        <ContentForm
          fields={getFieldsByElementType(contentFormType)}
          setIsOpen={setIsFormOpen}
          setContentFormResult={setContentFormResult}
        />
      )}
    </div>
  )
}
