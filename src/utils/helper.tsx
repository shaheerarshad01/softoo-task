import {discountTypes} from './constants';

export const mergedArr = (inputArray: Array<any>) =>
  inputArray?.reduce((acc, item) => {
    if (!acc[item.internalId]) {
      acc[item.internalId] = {...item, totalCount: 1};
    } else {
      acc[item.internalId] = {
        ...acc[item.internalId],
        ...item,
        totalCount: acc[item.internalId].totalCount + 1,
      };
    }
    return acc;
  }, {});

export const splitNumberString = (value: string | number) => {
  return (value as string).split(',');
};

export const DecoratedPrice = (value: string | number) => {
  const Currency = 'RS';
  return typeof value === 'number'
    ? `${Currency} ${value.toFixed(2)}`
    : `${Currency} ${parseInt(value).toFixed(2)}`;
};

export const RemoveFromItems = (items: Array<any>, id: number | string) => {
  const array = [...items];
  const index = array.findIndex(obj => obj.internalId === id);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
};
