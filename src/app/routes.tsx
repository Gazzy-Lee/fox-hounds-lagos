import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { RoomsPage } from "./components/RoomsPage";
import { RestaurantPage } from "./components/RestaurantPage";
import { LoungePage } from "./components/LoungePage";
import { EventsPage } from "./components/EventsPage";
import { GalleryPage } from "./components/GalleryPage";
import { ContactPage } from "./components/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "rooms", Component: RoomsPage },
      { path: "restaurant", Component: RestaurantPage },
      { path: "lounge", Component: LoungePage },
      { path: "events", Component: EventsPage },
      { path: "gallery", Component: GalleryPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);