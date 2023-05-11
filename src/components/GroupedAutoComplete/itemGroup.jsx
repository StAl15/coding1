/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

export const ItemGroup = ({params}) => {
    return (
        <div>
            <div tw={"p-2 bg-bgBeige"}>
                <span tw={"font-semibold text-graySmText"}>{params.group.toString()}</span>
            </div>
            {params.children.map((item, idx) =>
                <div
                    key={item.id}
                    css={[idx === 0 && tw`border-l-red-600 border-l-4`,
                        tw`p-1 pl-2 m-2 h-fit hover:bg-bgWhite hover:text-blueText`]}>
                    {item}
                </div>
            )}
        </div>
    );
};