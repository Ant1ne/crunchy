import React from "react";
import Image from "next/image";

function CategoryItem({ category, selectedCategory = null }) {
  return (
    <div className="flex flex-col items-center bg-teal-100 p-3 rounded-2xl hover:scale-105 transition-all duration-100 cursor-pointer ${selectedCategory?.name==category.name?'bg-teal-200':null}`}">
      <Image src={category.icon} alt={category.name} width={35} height={35} />
      <h2 className="text-[12px] text-black">{category.name}</h2>
    </div>
  );
}

export default CategoryItem;
