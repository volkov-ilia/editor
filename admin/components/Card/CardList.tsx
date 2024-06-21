import React, { useCallback, useEffect, useRef } from "react"
import { Card } from "./Card"
import { AutoSizer, CellMeasurer, CellMeasurerCache, List, ScrollEventData } from "react-virtualized"
import ICardsDataFetcher from "../../utils/dataFetching/ICardsDataFetcher"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { addCard, updateAll } from "../../app/reducers/CardSlice"
import { IoC } from "../../hwdtech-IoC"

type CardListProps = {
  fetcher: ICardsDataFetcher
}

const minCardHeight = 298

export const CardList: React.FC<CardListProps> = ({ fetcher }) => {
  const dispatch = useAppDispatch()
  const { cards } = useAppSelector((state) => state.cardReducer)

  const cache = new CellMeasurerCache({
    defaultHeight: minCardHeight,
    minHeight: minCardHeight,
    fixedWidth: true,
  })

  const rowRenderer = ({ key, index, style, parent }: { key: string; index: number; style: object; parent: any }) => {
    return (
      <CellMeasurer key={key} cache={cache} parent={parent} columnIndex={0} rowIndex={index}>
        <div style={style} key={key + index}>
          <Card {...cards[index]} />
        </div>
      </CellMeasurer>
    )
  }

  const fetchMoreData = useCallback(async () => {
    const newData = await fetcher.fetch("cards/article")
    if (newData?.[newData.length - 1]?.idCard === cards?.[cards.length - 1]?.idCard) return
    if (cards.length % fetcher.getCount() > 0) {
      const lastElement = newData?.pop()
      dispatch(addCard(lastElement === undefined ? [] : [lastElement]))
    } else {
      dispatch(addCard(newData))
    }
  }, [cards, fetcher])

  const fetchAllCards = useCallback(async () => {
    const newData = await fetcher.updateAll("cards/article")
    dispatch(updateAll(newData))
  }, [dispatch, fetcher])

  useEffect(() => {
    props.current = {
      next: fetchMoreData,
    }
  }, [fetchMoreData])

  const props = useRef({
    next: fetchMoreData,
  })

  const scrollListener = (e: ScrollEventData) => {
    const { next } = props.current
    const { clientHeight, scrollHeight, scrollTop } = e
    const atBottom = scrollTop + clientHeight >= scrollHeight
    if (atBottom) {
      next && next()
    }
  }
  useEffect(() => {
    IoC.resolve("IoC.Register", "CardList:updateAll", async () => {
      await fetchAllCards()
    })
  }, [dispatch, fetcher])

  return (
    <div style={{ width: "100%", height: "100%", background: "#efefef", padding: "0 4rem 0 4rem" }}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            rowCount={cards.length}
            rowHeight={cache.rowHeight}
            width={width}
            height={height}
            deferredMeasurementCache={cache}
            onScroll={scrollListener}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    </div>
  )
}
