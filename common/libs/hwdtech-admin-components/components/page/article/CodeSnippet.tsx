import React from "react"
import CodeSnippetProps from "../../../others/types/CodeSnippetProps"
import { useAmp } from "next/amp"
import { useEditorModeContext } from "../../EditorModeContext"
import ObjectContainer from "../../../others/types/ObjectContainer"

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
  id,
  src,
  resource,
  iframeId,
  title,
  heightValue,
  selector,
  link,
  height,
}) => {
  const isAmp = useAmp()
  return isAmp ? (
    <AmpCodeSnippet id={id} src={src} resource={resource} />
  ) : (
    <NoAmpCodeSnippet
      id={id}
      src={src}
      resource={resource}
      iframeId={iframeId}
      heightValue={heightValue}
      title={title}
      height={height}
      link={link}
      selector={selector}
    />
  )
}

const NoAmpCodeSnippet: React.FC<CodeSnippetProps> = ({
  id,
  src,
  resource,
  iframeId,
  title,
  heightValue,
  selector,
  link,
  height,
}) => {
  const { mode } = useEditorModeContext()
  const isEditable = mode === "editor"
  const editableFalse = isEditable ? { contentEditable: false, suppressContentEditableWarning: true } : {}

  let sandbox = "allow-presentation allow-same-origin allow-scripts"

  const EditableFC: React.FC<{
    title: ObjectContainer
    selector: ObjectContainer
    link: ObjectContainer
    height: ObjectContainer
  }> = ({ selector, title, height, link }) => {
    const isGit =
      selector.value === "GitHub" || selector.value === "GitLab" || resource === "GitHub" || resource === "GitLab"
    if (!isGit) sandbox += " allow-popups"
    return (
      <div id={id}>
        <span className={"w-full"}>{selector.slate}</span>
        <div className={"flex"}>
          <span className={"w-6/12 text-green"}>{link.slate}</span>
          <span className={"w-4/12"}>{title.slate}</span>
          <span className={"w-2/12"}>{height.slate}</span>
        </div>
        {link.value && (
          <div {...editableFalse}>
            <iframe
              src={
                isGit
                  ? `data:text/html;charset=utf-8,<head><base target='_blank' /></head><body><script src=${link.value}></script></body>`
                  : link.value
              }
              title={title.value}
              style={{
                width: "100%",
                height: `${height.value}px`,
                margin: "1.5rem 0",
              }}
              sandbox={sandbox}
            />
          </div>
        )}
      </div>
    )
  }

  const SiteFC: React.FC<{
    src: string
    resource: string
    iframeId: string
    heightValue: string
  }> = ({}) => {
    const isGit = resource === "GitHub" || resource === "GitLab"
    return (
      <iframe
        src={
          isGit
            ? `data:text/html;charset=utf-8,<head><base target='_blank' /></head><body><script src=${src}></script></body>`
            : src
        }
        title={iframeId}
        style={{
          width: "100%",
          height: `${heightValue}px`,
          margin: "1.5rem 0",
        }}
        sandbox={sandbox}
        id={id}
      />
    )
  }
  return isEditable ? (
    <EditableFC
      title={title as ObjectContainer}
      selector={selector as ObjectContainer}
      link={link as ObjectContainer}
      height={height as ObjectContainer}
    />
  ) : (
    <SiteFC
      src={src as string}
      heightValue={heightValue as string}
      iframeId={iframeId as string}
      resource={resource as string}
    />
  )
}

const AmpCodeSnippet: React.FC<
  Omit<CodeSnippetProps, "iframeId" | "title" | "heightValue" | "selector" | "link" | "height">
> = ({ id, src, resource }) => (
  <>
    {resource === "GitHub" || resource === "GitLab" ? (
      <amp-iframe
        style={{ margin: "1.5rem 0" }}
        width="auto"
        height="530"
        src={`data:text/html;charset=utf-8,<head><base target='_blank' /></head><body><script src=${src}></script></body>`}
        sandbox="allow-presentation allow-scripts"
        id={id}
      />
    ) : (
      <amp-iframe
        src={src}
        style={{ margin: "1.5rem 0" }}
        width="auto"
        height="600"
        sandbox="allow-presentation allow-scripts"
        id={id}
      />
    )}
  </>
)
