import InventoryTable from "../components/Inventory/Table";
import Pagination from "../components/Pagination";
import MainInventory from "../components/Inventory/MainInventory";
import InventoryHeader from "../components/Inventory/AddProduct";

const InventoryPage = () => {
  return (
    <div className=" p-2">
      <InventoryHeader />
      <div className=" overflow-x-hidden  md:w-full">
        <MainInventory />
      </div>
      <InventoryTable />
      {/* <Pagination /> */}
    </div>
  );
};

export default InventoryPage;
