import Link from "next/link";
import { renderButtonStyle } from "../utils/render-button-style";

interface ClickToActionProps {
  titleClickToAction: string;
  backgroundColor: string;
  textColor: string;
  action: {
    url: string;
    newTab: string;
    text: string;
    type: string;
  };
}

export default function ClickToAction({ data }: { data: ClickToActionProps }) {
  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <div
          className={` w-full py-20 my-1  flex flex-col justify-center gap-6  items-center text-xl `}
          style={{
            backgroundColor: data.backgroundColor,
            color: data.textColor,
          }}
        >
          <p>{data.titleClickToAction} </p>
          <Link
            href={data.action.url}
            target={data.action.newTab ? "_blank" : "_self"}
            className={renderButtonStyle(data.action.type)}
          >
            {data.action.text}
          </Link>
        </div>
      </div>
    </div>
  );
}
