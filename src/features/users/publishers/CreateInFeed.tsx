import { useState } from "react";
import HorizontalAd from "../../../components/shared/AdBlocks/Horizontal";
import SquareAd from "../../../components/shared/AdBlocks/Square";
import VerticalAd from "../../../components/shared/AdBlocks/Vertical";
import { Button } from "../../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Input } from "../../../components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";

const CreateInFeed = () => {
  return (
    <div className="mt-28 m-8 flex gap-32 w-full h-full flex-grow">
      <Tabs defaultValue="horizontal" className="w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-1">Ad preview</h2>
          <TabsList>
            <TabsTrigger value="horizontal">Horizontal</TabsTrigger>
            <TabsTrigger value="vertical">Vertical</TabsTrigger>
            <TabsTrigger value="square">Square</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="horizontal">
          <HorizontalAd />
        </TabsContent>
        <TabsContent value="vertical" className="flex-center">
          <VerticalAd />
        </TabsContent>
        <TabsContent value="square" className="flex-center w-full h-full">
          <SquareAd />
        </TabsContent>
      </Tabs>

      <div className="border-l px-12 flex items-center flex-col justify-between">
        <Input type="text" placeholder="name" />
        <GetCodeButton />
      </div>
    </div>
  );
};

function GetCodeButton() {
  const [isCopied, setIsCopied] = useState(false);

  const adScript = `
  <script async src="http://localhost:5500/ad-script.js"></script>
  `;

  const handleCopyClick = async () => {
    setIsCopied(true);
    await navigator.clipboard.writeText("hi");

    setTimeout(() => setIsCopied(false), 1000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add New Site</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Copy & Paste this code into your website</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4 w-full">
          <code className="overflow-auto w-full whitespace-break-spaces">
            {adScript}
          </code>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={() => handleCopyClick()}>
            {isCopied ? "Copied!" : "Copy to Clipboard"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateInFeed;
