import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OptionBar from "./OptionBar";

import { Editor } from "@tiptap/react";
import InsertOptionBar from "./InsertOptionBar";

const OptionTabs = ({ editor }: { editor: Editor }) => {
  return (
    <>
      <Tabs
        defaultValue="edit"
        className="minw-w-100 md:max-w-4xl sm:max-w-3xl">
        <TabsList>
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="insert">Insert</TabsTrigger>
        </TabsList>
        <TabsContent value="edit">
          <OptionBar editor={editor} />
        </TabsContent>
        <TabsContent value="insert">
          <InsertOptionBar editor={editor} />
        </TabsContent>
      </Tabs>
    </>
  );
};

export default OptionTabs;
