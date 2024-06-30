/* eslint-disable @typescript-eslint/consistent-type-imports */
import { Button, Input, Loader, Navbar } from "components";
import { SvgTesMessageSquareEdit, TesCheckedboxMarkedCircle } from "components/icons";
import { user } from "assets/images";
import { ProfileViewModal } from "components/modules/modals";
import { useState } from "react";
import { UserDetails, Settings } from "types";
import { Formik } from "formik";

type ModalId = string | null;
interface Props {
  loading: boolean;
  create: Function;
  userDetails: UserDetails;
  image: string;
  pictureUpload: Function;
  isLoading: boolean;
}

function ProfileView({ loading, create, userDetails, pictureUpload, isLoading }: Props) {
  const [openModal, setOpenModal] = useState<ModalId>(null);

  const onsubmit = (updatedProfile: Settings) => {
    create(updatedProfile);
  };

  const handlePhotoUpload = (event: any) => {
    const file = event.currentTarget.files[0];

    pictureUpload(file);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {isLoading ? (
        <p className="flex justify-center text-lg font-semibold text-yellow-500">
          Loading Profile View...
        </p>
      ) : (
        <div className="mt-8 p-6 bg-white-700 rounded-lg shadow-md">
          <Formik
            initialValues={{}}
            onSubmit={handlePhotoUpload}
            enableReinitialize
            validationSchema={{}}
          >
            <div className="relative flex justify-center mt-8 overflow-hidden">
              <div className="relative flex items-center flex-col mb-6 w-32 h-32">
                <div className="relative shadow rounded-full w-full h-full">
                  <img
                    src={user}
                    alt="Profile"
                    className="shadow rounded-full w-full h-full border-2 border-yellow-500"
                  />
                  <div className="absolute right-0 bottom-0 bg-green-700 p-1 rounded-full">
                    <TesCheckedboxMarkedCircle color="yellow" width="25px" height="25px" />
                  </div>
                </div>
                <Input
                  className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                  type="file"
                  name="select-photo"
                  id="select-photo"
                  onChange={handlePhotoUpload}
                  accept="image/png, image/jpeg, image/jpg"
                />
                <div className="flex items-center space-x-2 mt-2">
                  <SvgTesMessageSquareEdit color="yellow" />
                  <label
                    htmlFor="select-photo"
                    className="text-sm font-medium text-yellow-500 cursor-pointer"
                  >
                    Change Photo
                  </label>
                </div>
              </div>
            </div>
          </Formik>
          <div className="p-4 bg-green-800 border-color-white border-2 rounded-md shadow-md mb-6">
            <div className="flex flex-col sm:flex-row">
              <div className="p-2">
                <div className="text-sm font-semibold text-yellow-500">Full Name</div>
                <span className="text-lg">
                  {"First Name"} {"Last Name"}
                </span>
              </div>
              <div className="p-2">
                <div className="text-sm font-semibold text-yellow-500">Date of Birth</div>
                <span className="text-lg">{" 20 March, 2024"}</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-green-800  border-color-white border-2  rounded-md shadow-md mb-6">
            <div className="flex flex-col sm:flex-row">
              <div className="p-2 flex-1">
                <div className="text-sm font-semibold text-yellow-500">Address</div>
                <span className="text-lg">{userDetails?.tscFileNumber || "-"}</span>
              </div>
              <div className="p-2 flex-1">
                <div className="text-sm font-semibold text-yellow-500">Zip</div>
                <span className="text-lg">{userDetails?.schoolOfPresentPosting || "-"}</span>
              </div>
              <div className="p-2 flex-1">
                <div className="text-sm font-semibold text-yellow-500">City</div>
                <span className="text-lg">{userDetails?.zone || "-"}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="p-2 flex-1">
                <div className="text-sm font-semibold text-yellow-500">State</div>
                <span className="text-lg">{userDetails?.division || "-"}</span>
              </div>
              <div className="p-2 flex-1">
                <div className="text-sm font-semibold text-yellow-500">Country</div>
                <span className="text-lg">{userDetails?.nationality || "-"}</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-green-800  border-color-white border-2  rounded-md shadow-md mb-6 flex flex-col sm:flex-row">
            <div className="p-2 flex-1">
              <div className="text-sm font-semibold text-yellow-500">Phone Number</div>
              <span className="text-lg">{userDetails?.dateOfPresentSchoolPosting || "-"}</span>
            </div>
            <div className="p-2 flex-1">
              <div className="text-sm font-semibold text-yellow-500">Email Address</div>
              <span className="text-lg">{userDetails?.email || "-"}</span>
            </div>
          </div>
          <div className="flex justify-end">
            <Button
              onClick={() => setOpenModal("form")}
              size="sm"
              type="submit"
              className="w-20 h-12 bg-yellow-500 text-black hover:bg-yellow-600"
            >
              {loading ? <Loader /> : "Edit"}
            </Button>
          </div>
        </div>
      )}
      {openModal === "form" && (
        <ProfileViewModal
          title="Edit Profile"
          onSubmit={onsubmit}
          userDetails={userDetails}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
}

export default ProfileView;
