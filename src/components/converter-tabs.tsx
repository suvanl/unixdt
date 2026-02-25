import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ConverterTabs() {
  return (
    <Tabs defaultValue="timestamp">
      <TabsList>
        <TabsTrigger value="timestamp">Timestamp to date</TabsTrigger>
        <TabsTrigger value="date">Date to timestamp</TabsTrigger>
      </TabsList>
      <TabsContent value="timestamp">TODO ts</TabsContent>
      <TabsContent value="date">TODO dt</TabsContent>
    </Tabs>
  );
}
