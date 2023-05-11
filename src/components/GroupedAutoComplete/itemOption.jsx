/** @jsxImportSource @emotion/react */
import tw from "twin.macro";

export const ItemOption = ({parts, isSubtitle = false}) => {
    return (
        <div>
            {parts.map((part, index) => (
                <span
                    key={part.id}
                    css={[isSubtitle ? tw`text-sm text-graySmText` : tw``, part.highlight && tw`font-semibold`]}
                >
                    {part.text}
                </span>
            ))}
        </div>
    );
};