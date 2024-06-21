import React from "react"
import clsx from "clsx"
import Link from "next/link"
import { useAmp } from "next/amp"
import PrimaryButtonProps from "../../../../others/types/nested/PrimaryButtonProps"

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  text,
  disabled,
  action,
  type,
  isNotUpperCase,
  href,
  ampStyle,
  linkTitle,
  className,
  easterEggs,
}) => {
  const isAmp = useAmp()

  return isAmp ? (
    <AmpPrimaryButton
      title={title}
      text={text}
      disabled={disabled}
      action={action as string | undefined}
      type={type}
      href={href}
      linkTitle={linkTitle}
      ampStyle={ampStyle}
    />
  ) : (
    <NoAmpPrimaryButton
      title={title}
      text={text}
      disabled={disabled}
      action={action as React.MouseEventHandler<HTMLButtonElement> | undefined}
      type={type}
      isNotUpperCase={isNotUpperCase}
      href={href}
      linkTitle={linkTitle}
      className={className}
      easterEggs={easterEggs}
    />
  )
}

const NoAmpPrimaryButton: React.FC<
  Omit<PrimaryButtonProps, "ampStyle" | "action"> & {
    action?: React.MouseEventHandler<HTMLButtonElement>
  }
> = ({ text, title, disabled, action, type, isNotUpperCase, href, linkTitle, className, easterEggs }) =>
  href ? (
    <Link href={href}>
      <a
        className={clsx(
          "relative transition bg-primary my-auto text-white text-center w-40 rounded font-bold text-sm hover:shadow-primary-button",
          isNotUpperCase ? "" : "uppercase",
          className,
          "primary-bg"
        )}
        title={linkTitle}
      >
        {easterEggs && easterEggs}
        {text}
        <style jsx>{`
          a {
            width: auto;
            min-height: 48px;
            padding: 14px 20px;
            outline: none;
          }
        `}</style>
      </a>
    </Link>
  ) : (
    <button
      title={title}
      className={clsx(
        "relative bg-primary text-white w-40 rounded font-bold text-sm secondary-text",
        { uppercase: !isNotUpperCase },
        disabled ? "bg-disabled-primary cursor-not-allowed" : "transition hover:shadow-primary-button",
        className,
        disabled ? "primary-disabled-button" : "primary-bg primary-shadow-button"
      )}
      disabled={disabled}
      onClick={action}
      type={type || "button"}
    >
      {easterEggs && easterEggs}
      {text}
      <style jsx>{`
        button {
          width: auto;
          min-height: 48px;
          padding: 8px 20px;
          outline: none;
        }
      `}</style>
    </button>
  )

const AmpPrimaryButton: React.FC<
  Omit<PrimaryButtonProps, "className" | "easterEggs" | "action"> & {
    action?: string
  }
> = ({ text, title, disabled, action, type, href, linkTitle, ampStyle }) =>
  href ? (
    <a href={href} title={linkTitle} style={ampStyle}>
      {text}
      <style jsx>{`
        a {
          width: auto;
          padding: 16px 20px;
          border-style: none;
          background-color: rgb(16, 172, 132);
          color: white;
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 700;
          border-radius: 0.25rem;
          margin-top: auto;
          margin-bottom: auto;
          text-transform: uppercase;
          text-decoration: none;
        }

        :hover {
          box-shadow: 0 5px 15px rgba(16, 172, 132, 0.4);
          cursor: pointer;
        }
      `}</style>
    </a>
  ) : (
    <button title={title} disabled={disabled} on={action} type={type || "button"}>
      {text}
      <style jsx>{`
        button {
          width: auto;
          min-height: 48px;
          padding: 8px 20px;
          border-style: none;
          background-color: rgb(16, 172, 132);
          color: white;
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 700;
          border-radius: 0.25rem;
          margin-top: auto;
          margin-bottom: auto;
          text-transform: uppercase;
        }

        :hover {
          box-shadow: 0 5px 15px rgba(16, 172, 132, 0.4);
          cursor: pointer;
        }

        :disabled {
          background: rgb(183, 219, 221);
          box-shadow: none;
          cursor: not-allowed;
        }
      `}</style>
    </button>
  )
