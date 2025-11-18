import React from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/Table";

const products = [
  { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, amount: "$6,518.18" },
  { name: "Morco Lightweight Shirt", price: "$128.50", quantity: 37, amount: "$4,754.50" },
  { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, amount: "$2,559.36" },
  { name: "Lightweight Jacket", price: "$20.00", quantity: 184, amount: "$3,680.00" },
  { name: "Morco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
];

const TopSellingTable = () => {
  return (
    <div className="bg-white dark:bg-[#23272F] rounded-2xl p-6 border border-[#e5e7eb] dark:border-[#23272F]">
      <h2 className="text-sm font-semibold mb-2 dark:text-white">Top Selling Products</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="dark:text-gray-200">Product</TableHead>
            <TableHead className="dark:text-gray-200">Price</TableHead>
            <TableHead className="dark:text-gray-200">Quantity</TableHead>
            <TableHead className="dark:text-gray-200">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, idx) => (
            <TableRow key={idx} className="dark:text-gray-200">
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TopSellingTable;
