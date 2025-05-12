const itemList = [
  {
    id: "P001",
    name: "무선 이어폰",
    price: 89000,
    stock: 120,
    sales: 350,
  },
  {
    id: "P002",
    name: "게이밍 키보드",
    price: 129000,
    stock: 80,
    sales: 210,
  },
  {
    id: "P003",
    name: "LED 스탠드",
    price: 35000,
    stock: 200,
    sales: 90,
  },
  {
    id: "P004",
    name: "USB 허브",
    price: 19000,
    stock: 150,
    sales: 180,
  },
  {
    id: "P005",
    name: "기계식 키보드",
    price: 99000,
    stock: 60,
    sales: 220,
  },
  {
    id: "P006",
    name: "노이즈 캔슬링 헤드폰",
    price: 159000,
    stock: 45,
    sales: 310,
  },
  {
    id: "P007",
    name: "휴대용 충전기",
    price: 23000,
    stock: 300,
    sales: 500,
  },
  {
    id: "P008",
    name: "게이밍 마우스",
    price: 59000,
    stock: 110,
    sales: 275,
  },
  {
    id: "P009",
    name: "스마트 워치",
    price: 149000,
    stock: 70,
    sales: 430,
  },
  {
    id: "P010",
    name: "휴대용 선풍기",
    price: 27000,
    stock: 250,
    sales: 600,
  },
];

const canAdvertiseList = {
  P001: true,
  P002: false,
  P003: true,
  P004: true,
  P005: false,
  P006: true,
  P007: false,
  P008: true,
  P009: false,
  P010: true,
};

function getItemList() {
  return itemList;
}

function getCanAdvertiseList() {
  return canAdvertiseList;
}

export function useData() {
  return {
    getItemList,
    getCanAdvertiseList,
  };
}
