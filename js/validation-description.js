const MAX_DESCRIPTION = 140;

const getErrorMessageDescription = () => `Длина комментария не может составлять больше ${MAX_DESCRIPTION} символов'`;
const isDescriptionValid = (description) => description.length < MAX_DESCRIPTION;

export { getErrorMessageDescription, isDescriptionValid };
