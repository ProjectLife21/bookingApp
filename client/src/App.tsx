import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import {
  AddHotePage,
  BookingPage,
  EditHotelPage,
  ErrorPage,
  HomePage,
  MyBookingPage,
  MyHotelsPage,
  RegisterPage,
  SearchPage,
  SignInPage,
  ProtectedRoute,
} from "./pages";
import { MainLayout } from "./layouts";
import DetailHotePage from "./pages/DetailHotePage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "search",
          element: <SearchPage />,
        },
        {
          path: "detail/:hotelId",
          element: <DetailHotePage />,
        },

        {
          path: "hotel/:hotelId/booking",
          element: (
            <ProtectedRoute>
              <BookingPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/add-hotel",
          element: (
            <ProtectedRoute>
              <AddHotePage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/edit-hotel/:hotelId",
          element: (
            <ProtectedRoute>
              <EditHotelPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/my-hotels",
          element: (
            <ProtectedRoute>
              <MyHotelsPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/my-bookings",
          element: (
            <ProtectedRoute>
              <MyBookingPage />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/sign-in",
      errorElement: <ErrorPage />,
      element: <SignInPage />,
    },
    {
      path: "/register",
      errorElement: <ErrorPage />,
      element: <RegisterPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;
