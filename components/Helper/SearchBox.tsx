import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { SearchCheckIcon, SearchIcon } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";

const SearchBox = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <SearchIcon />
      </DialogTrigger>
      <DialogContent>
      <DialogTitle></DialogTitle>
        <form>
          <input
            className="w-full bg-gray-300 px-6 py-2 block mt-4 outline-none rounded-lg"
            type="text"
            placeholder="Search Product"
          />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBox;
