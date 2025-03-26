import React from "react";
import { FaPlus } from "react-icons/fa6";
import { BiTrashAlt } from "react-icons/bi";

export default function ShoppingCart() {
  return (
    <div className="container mt-10">
      <div className="flex items-center justify-center text-3xl font-bold">
        <h1 className="hidden lg:block">سبد خرید</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-x-8 items-start mt-5">
        <div className="lg:border border-b border-neutral6 lg:rounded-lg w-full flex-3/4 p-5">
            <h2 className="font-bold mr-8 mb-3 text-lg">سبد خرید شما</h2>
            <div className="flex items-center mt-5">
                <img src="./public/images/carpets/5.png" className="object-cover" alt="" />
                <div className="*:mb-2.5">
                    <h3 className="text-xl font-bold">فرش ماشینی  ماهساره طرح آترینا زمینه آبی</h3>
                    <div className="text-lg">رنگ: <span>آبی </span></div>
                    <p className="text-lg">شرکت فرش سهند</p>
                    <div className="text-lg">قیمت: <span className="text-xl">۱۳/۵۰۰/۰۰۰</span></div>
                    <div className="flex gap-x-5 border border-neutral6 rounded-lg w-fit px-2">
                        <button><FaPlus className="h-5 w-5 text-primary cursor-pointer"/></button>
                        <div className="flex flex-col justify-center items-center text-sm">
                            <span className="text-xl">1</span>
                            تعداد
                        </div>
                        <button><BiTrashAlt className="h-5 w-5 text-primary cursor-pointer"/></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-y-5 lg:border border-neutral6 rounded-lg w-full flex-1/4 p-5">
            <div className="flex justify-between font-bold">
                <span>تعداد فرش:</span>
                <span>۱</span>
            </div>
            <div className="flex justify-between font-bold">
                <span>مجموع سبد خرید: </span>
                <span>۱۳/۵۰۰/۰۰۰</span>
            </div>
            <div className="flex justify-between font-bold">
                <span>ارسال توسط:</span>
                <span>ایرانی فرش</span>
            </div>
            <button className="text-white bg-primary rounded-lg w-full py-1 cursor-pointer">سفارش و خرید</button>
        </div>
      </div>
    </div>
  );
}
