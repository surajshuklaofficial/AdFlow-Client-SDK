import { useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

import { CalendarDateRangePicker } from "../../../../components/dashboard/date-range-picker";
import { Overview } from "../../../../components/dashboard/overview";
import { RecentSales } from "../../../../components/dashboard/recent-sales";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAdAsync } from "../slice";
import EnterAd from "./AdInput";
import { Dispatch } from "../../../../app/store";

const ad = {
  adUrl:
    "https://tse1.mm.bing.net/th?id=OIP.9cXbiHHGV6drC_tObQRaiwHaKy&pid=Api&P=0&h=220",
  directingUrl: "https://surajshukla.vercel.app/",
  advertiser: 3,
  id: 2,
  title: "Catchy Ad Title",
  description: "Engaging description for the ad content.",
  organizationName: "Company XYZ",
  startDate: "2023-01-01",
  endDate: "2023-02-01",
  isActive: true,
  clickCount: 500,
  impressionCount: 10000,
  targetAudience: ["Male", "18-35"],
  budget: 1000.0,
  bidAmount: 0.05,
  createdDate: "2023-01-01T12:00:00",
  updatedDate: "2023-01-15T15:30:00",
};

type Handler = (action: "active" | "inactive" | "delete" | "update") => void;

export default function Dashboard() {
  const disptach = useDispatch<Dispatch>();
  return (
    <div className="flex-col md:flex w-full pt-[4.5rem]">
      <div className="flex-1 space-y-4 p-2 sm:p-8 pt-6">
        <Tabs defaultValue="overview" className="space-y-4">
          <div className="flex items-center justify-between space-y-2 md:flex-row flex-col-reverse gap-4">
            <TabsList className="w-full md:w-fit">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <div className="flex-center space-x-2">
              <CalendarDateRangePicker />
              <SelectCampaignState dispatch={disptach}/>
            </div>
          </div>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Spent
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    ${ad.clickCount * ad.bidAmount}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Budget: ${ad.budget}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Clicks
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+{ad.clickCount}</div>
                  <p className="text-xs text-muted-foreground">
                    +180.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Impressions
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <path d="M2 10h20" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    +{ad.impressionCount}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Bid Amount
                  </CardTitle>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${ad.bidAmount}</div>
                  <p className="text-xs text-muted-foreground">
                    +201 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 content-center">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-4 sm:col-span-3">
                <CardHeader>
                  <CardTitle>Recent Sales</CardTitle>
                  <CardDescription>
                    You made 265 sales this month.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export function SelectCampaignState({dispatch}: {dispatch: Dispatch}) {
  const [value, setValue] = useState<string>(
    ad.isActive ? "active" : "inactivate"
  );
  const handleCampaignStatusChange = (newValue: string) => {
    console.log(newValue, value);
    setValue(newValue);
  };

  return (
    <>
      <Select
        onValueChange={(e) => handleCampaignStatusChange(e)}
        value={value}
      >
        <SelectTrigger>
          <SelectValue
            placeholder={ad.isActive ? "Active" : "Inactive"}
            defaultValue={value}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="active">Activate Campaign</SelectItem>
            <SelectItem value="inactivate">Deactivate Campaign</SelectItem>
            <SelectItem value="delete">Delete Campaign</SelectItem>
            <SelectItem value="update">Update Campaign</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      {value === "delete" && (
        <DeleteConfirmation
          handleCampaignStatusChange={handleCampaignStatusChange}
          dispatch={dispatch}
        />
      )}
      {value === "update" && (
        <div>
          <EnterAd handleAdInput={() => handleCampaignStatusChange("active")} />
          <div
            className="fixed inset-0 bg-black opacity-75 z-30"
            onClick={() => handleCampaignStatusChange("active")}
          />
        </div>
      )}
    </>
  );
}

export function DeleteConfirmation({ handleCampaignStatusChange, dispatch }: {handleCampaignStatusChange: Handler, dispatch: Dispatch}) {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    console.log(id);
    dispatch(deleteAdAsync(id));
    navigate(-1);
  };

  return (
    <div className="inset-0 z-40 flex-center fixed">
      <div className="bg-white relative z-50 rounded-md border p-4  space-y-8 shadow-md">
        <div>
          <h4 className="text-red-500 font-bold text-center">Warning!</h4>
          <p className="font-semibold">Are you sure to delete this campaign?</p>
        </div>
        <div className="flex gap-4 justify-end">
          <button
            className="border py-1 w-16 rounded-md text-center bg-"
            onClick={() => handleCampaignStatusChange("active")}
          >
            No
          </button>
          <button
            className="border border-red-500 py-1 w-16 rounded-md text-center bg-red-500 text-white"
            onClick={handleDelete}
          >
            Yes
          </button>
        </div>
      </div>
      <div
        className="absolute inset-0 bg-white opacity-90 blur-lg z-40"
        onClick={() => handleCampaignStatusChange("active")}
      />
    </div>
  );
}
