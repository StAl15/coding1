import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";

export const parseHighlited = (option, inputValue) => {
    const matchesItem = match(option ? option.toString() : '', inputValue, {insideWords: true});
    return parse(option ? option.toString() : '', matchesItem)
}