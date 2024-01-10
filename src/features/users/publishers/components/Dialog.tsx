import { Button } from "../../../../components/ui/button"
import { useForm, SubmitHandler } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/ui/dialog"
import { Input } from "../../../../components/ui/input"
import { Label } from "../../../../components/ui/label"
import { useDispatch } from "react-redux";
import { Dispatch } from "../../../../app/store";
import { Website } from "../../../../app/types";
import { addWebsiteAsync } from "../slice";

export default function DialogDemo() {
  const { register, handleSubmit } = useForm<Website>();
  const dispatch = useDispatch<Dispatch>();

  const jwt_token: string | null = localStorage.getItem("jwt_token");

  const onSubmit: SubmitHandler<Website> = (data) => {
    dispatch(addWebsiteAsync({ ...data, user: jwt_token}))
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add New Site</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Site</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
        >
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="websiteName" className="text-md">
              Website
            </Label>
            <Input id="websiteName" className="col-span-3" autoComplete="off" {...register("websiteName", { required: true })}/>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Add</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
