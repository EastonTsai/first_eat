


export const dummyDrinkList =
  [
    {
      name: '紅茶',
      size: [
        { size: '小杯', price: '20' },
        { size: '大杯', price: '25' },
      ],
      temperature: ['冰', '溫', '熱']
    },
    {
      name: '綠茶',
      size: [
        { size: '小杯', price: '20' },
        { size: '大杯', price: '25' },
      ],
      temperature: ['冰', '溫', '熱']
    },
    {
      name: '奶茶',
      size: [
        { size: '小杯', price: '25' },
        { size: '大杯', price: '30' },
      ],
      temperature: ['冰', '溫', '熱']
    },
    {
      name: '咖啡',
      size: [
        { size: '小杯', price: '35' },
        { size: '大杯', price: '50' },
      ],
      temperature: ['冰', '溫', '熱']
    },
    {
      name: '果汁',
      size: [{ size: '小杯', price: '50' },],
      temperature: ['冰']
    },
    {
      name: '阿華田',
      size: [
        { size: '小杯', price: '45' },
        { size: '大杯', price: '55' },
      ],
      temperature: ['冰', '溫', '熱']
    },
  ]


const comboList = (number: number) => {
  const list = []
  for (let i = 1; number > i; i++) {
    let obj = {
      id: i.toString(),
      url: 'https://picsum.photos/500/400?random=' + i,
      title: '組合套餐 ' + i,
      price: i * 10 + 59,
      meals: ['主餐' + i, '配餐' + i]
    }
    list.push(obj)
  }
  return list
}
export const dummyComboList = comboList(20)

const singleMeal = (array: string[]) => {
  let list = []
  for (let i in array) {
    const obj = {
      category: array[i],
      meals: [
        {
          name: '原味' + array[i],
          price: +i + 1 * 10 + 39,
          remark: ['生菜', '雞蛋', '花生醬', '肉排', '洋蔥'],
          picture: 'https://picsum.photos/500/400?random=' + 100 + i,
        },
        {
          name: '豬肉' + array[i],
          price: +i + 1 * 20 + 39,
          remark: ['生菜', '雞蛋', '花生醬', '肉排', '洋蔥'],
          picture: 'https://picsum.photos/500/400?random=' + 101 + i
        },
        {
          name: '雞肉' + array[i],
          price: +i + 1 * 30 + 39,
          remark: ['生菜', '雞蛋', '花生醬', '肉排', '洋蔥'],
          picture: 'https://picsum.photos/500/400?random=' + 102 + i
        },
        {
          name: '牛肉' + array[i],
          price: +i + 1 * 40 + 39,
          remark: ['生菜', '雞蛋', '花生醬', '肉排', '洋蔥'],
          picture: 'https://picsum.photos/500/400?random=' + 103 + i
        },
        {
          name: '菜菜' + array[i],
          price: +i + 1 * 40 + 39,
          remark: ['生菜', '雞蛋', '花生醬', '肉排', '洋蔥'],
          picture: 'https://picsum.photos/500/400?random=' + 104 + i
        },
        {
          name: '大豆' + array[i],
          price: +i + 1 * 40 + 39,
          remark: ['生菜', '雞蛋', '花生醬', '肉排', '洋蔥'],
          picture: 'https://picsum.photos/500/400?random=' + 105 + i
        },
        {
          name: '海鮮' + array[i],
          price: +i + 1 * 40 + 39,
          remark: ['生菜', '雞蛋', '花生醬', '肉排', '洋蔥'],
          picture: 'https://picsum.photos/500/400?random=' + 106 + i
        },
        {
          name: '素食' + array[i],
          price: +i + 1 * 40 + 39,
          remark: ['生菜', '雞蛋', '花生醬', '肉排', '洋蔥'],
          picture: 'https://picsum.photos/500/400?random=' + 107 + i
        },
      ]
    }
    list.push(obj)
  }
  return list;
}
export const dummySingleMealList = singleMeal(['土司', '漢堡', '蛋餅', '河粉', '麵食'])