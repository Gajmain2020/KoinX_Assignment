import { TabList, Tabs, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { TAB_OPTIONS } from "../Constants";

export default function TabsView() {
  return (
    <div className="my-2 overflow-auto font-semibold border-transparent text-sm text-blue_gray-500">
      <Tabs>
        <TabList className="flex gap-5 custom-tab-list">
          {TAB_OPTIONS.map((tab) => (
            <Tab className="py-2 custom-tab border-b-2 border-transparent  hover:border-blue-500">
              {tab}
            </Tab>
          ))}
        </TabList>
      </Tabs>
    </div>
  );
}
