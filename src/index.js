
import { validate, normalize, format } from 'pixkey';
import { v4 as uuid } from 'uuid';

const keys = [
  { value: '742.673.199-52', comment: 'CPF with format' },
  { value: '86438236004', comment: 'CPF without format' },
  { value: 'jeff.follmann+bb@mailinator.com', comment: 'Email' },
  { value: '13.042.765/0001-36', comment: 'CNPJ with format' },
  { value: '98984724000111', comment: 'CNPJ without format' },
  { value: '(51)99818-1235', comment: 'Phone with format' },
  { value: '51998181235', comment: 'Phone without format' },
  { value: uuid(), comment: 'Unique Identifier' },
];

keys.forEach(({ value, comment }) => {
  const [type] = validate(value);

  console.log({
    inputValue: value,
    comment,
    result: {
      type, normalize: normalize(value), format: format(value)
    }
  });
});