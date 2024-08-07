import { Navbar } from "components";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchSchools } from "../../services/schools.service";
import { getLongDate } from "utils";
import LogoLoader from "components/widgets/loader/LogoLoader";

interface ISchools {
  _id?: string;
  nameOfSchool: string;
  category: string;
  address: string;
  location: string;
  zone: string;
  division: string;
  listOfStaff: any[];
  principal: any;
  vicePrincipalAdmin: any;
  vicePrincipalAcademics: any;
  latitude: string;
  longitude: string;
}

const ITEMS_PER_PAGE = 9;

export const SchoolView: React.FC = () => {
  const [schools, setSchools] = useState<ISchools[]>([]);
  const [openSchoolId, setOpenSchoolId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const loadSchools = async () => {
      try {
        const fetchedSchools = await fetchSchools();
        setSchools(fetchedSchools);
      } catch (error) {
        setError("Failed to fetch schools");
      } finally {
        setLoading(false);
      }
    };

    void loadSchools();
  }, []);

  const handleToggle = (_id: string) => {
    setOpenSchoolId(openSchoolId === _id ? null : _id);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) return <LogoLoader />;
  if (error) return <p>{error}</p>;

  // Calculate the indices of the first and last items to display
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedSchools = schools.slice(startIndex, endIndex);

  const totalPages = Math.ceil(schools.length / ITEMS_PER_PAGE);

  return (
    <>
      <Navbar />
      <div className="flex flex-col h-screen w-full bg-gray-900 mt-20 gap-2 justify-start p-5">
        {paginatedSchools.map((school) => (
          <div
            key={school._id}
            className={`flex flex-col w-full ${openSchoolId && openSchoolId !== school._id ? "hidden" : ""}`}
          >
            <div
              className="flex flex-row justify-between items-center min-h-[20px] bg-gray-700 w-full p-1 z-3 cursor-pointer"
              onClick={() => {handleToggle(school._id!)}}
            >
              <p className="text-white">{school?.nameOfSchool}</p>
              <h5 className="text-white">{openSchoolId === school._id ? "-" : "+"}</h5>
            </div>

            <AnimatePresence>
              {openSchoolId === school?._id && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden bg-gray-200 w-full p-4 rounded-lg shadow-lg"
                >
                  <div className="bg-white p-4 rounded-lg shadow-md max-h-[500px] overflow-auto">
                    <h2 className="text-xl font-semibold mb-2">{school?.nameOfSchool}</h2>
                    <p className="text-gray-700 mb-1">
                      <strong>Category:</strong> {school?.category}
                    </p>
                    <p className="text-gray-700 mb-1">
                      <strong>Address:</strong> {school?.address}
                    </p>
                    <p className="text-gray-700 mb-1">
                      <strong>Division:</strong> {school?.division}
                    </p>
                    <p className="text-gray-700 mb-1">
                      <strong>Location:</strong> {school?.location}
                    </p>
                    {school.listOfStaff.map((staff: any) => (
                      <p key={staff._id} className="text-gray-700 mb-1">
                        <strong>Staff Name:</strong> {staff?.gender}
                      </p>
                    ))}

                    <div className="mt-4">
                      <h3 className="text-lg font-semibold mb-2">Principal</h3>
                      {school.principal ? (
                        <div className="bg-gray-50 p-3 rounded-lg shadow-sm mb-4">
                          <p>
                            <strong>Name:</strong> {school?.principal?.staffName?.firstName}
                          </p>
                          <p>
                            <strong>Position:</strong> {school.principal?.position}
                          </p>
                          <p>
                            <strong>Gender:</strong> {school.principal?.gender}
                          </p>
                          <p>
                            <strong>Phone:</strong> {school.principal?.phoneNumber}
                          </p>
                          <p>
                            <strong>OG Number:</strong> {school.principal?.ogNumber}
                          </p>
                          <p>
                            <strong>TSC File Number:</strong> {school.principal?.tscFileNumber}
                          </p>
                          <p>
                            <strong>Date of Present Posting:</strong>{" "}
                            {school?.principal?.dateOfPresentPosting}
                          </p>
                          <p>
                            <strong>Date of First Appointment:</strong>{" "}
                            {getLongDate(school?.principal?.dateOfFirstAppointment)}
                          </p>
                          <p>
                            <strong>Date of Birth:</strong>{" "}
                            {getLongDate(school?.principal?.dateOfBirth)}
                          </p>
                          <p>
                            <strong>Date of Retirement:</strong>{" "}
                            {getLongDate(school?.principal?.dateOfRetirement)}
                          </p>
                          <p>
                            <strong>Grade Level:</strong> {school?.principal?.gradeLevel}
                          </p>
                        </div>
                      ) : (
                        <p className="text-gray-500">Vacant</p>
                      )}

                      <h3 className="text-lg font-semibold mb-2">Vice Principal Admin</h3>
                      {school.vicePrincipalAdmin ? (
                        <div className="bg-gray-50 p-3 rounded-lg shadow-sm mb-4">
                          <p>
                            <strong>Name:</strong> {school?.vicePrincipalAdmin?.staffName.firstName}
                          </p>
                          <p>
                            <strong>Position:</strong> {school?.vicePrincipalAdmin?.position}
                          </p>
                          <p>
                            <strong>Gender:</strong> {school?.vicePrincipalAdmin?.gender}
                          </p>
                          <p>
                            <strong>Phone:</strong> {school?.vicePrincipalAdmin?.phoneNumber}
                          </p>
                          <p>
                            <strong>OG Number:</strong> {school?.vicePrincipalAdmin?.ogNumber}
                          </p>
                          <p>
                            <strong>TSC File Number:</strong>{" "}
                            {school?.vicePrincipalAdmin?.tscFileNumber}
                          </p>
                          <p>
                            <strong>Date of Present Posting:</strong>{" "}
                            {school?.vicePrincipalAdmin?.dateOfPresentPosting}
                          </p>
                          <p>
                            <strong>Date of First Appointment:</strong>{" "}
                            {getLongDate(school?.vicePrincipalAdmin?.dateOfFirstAppointment)}
                          </p>
                          <p>
                            <strong>Date of Birth:</strong>{" "}
                            {getLongDate(school?.vicePrincipalAdmin?.dateOfBirth)}
                          </p>
                          <p>
                            <strong>Date of Retirement:</strong>{" "}
                            {getLongDate(school?.vicePrincipalAdmin?.dateOfRetirement)}
                          </p>
                          <p>
                            <strong>Grade Level:</strong> {school?.vicePrincipalAdmin?.gradeLevel}
                          </p>
                        </div>
                      ) : (
                        <p className="text-gray-500">Vacant</p>
                      )}

                      <h3 className="text-lg font-semibold mb-2">Vice Principal Academics</h3>
                      {school?.vicePrincipalAcademics ? (
                        <div className="bg-gray-50 p-3 rounded-lg shadow-sm mb-4">
                          <p>
                            <strong>Name:</strong>{" "}
                            {school?.vicePrincipalAcademics?.staffName.firstName}
                          </p>
                          <p>
                            <strong>Position:</strong> {school.vicePrincipalAcademics?.position}
                          </p>
                          <p>
                            <strong>Gender:</strong> {school.vicePrincipalAcademics?.gender}
                          </p>
                          <p>
                            <strong>Phone:</strong> {school.vicePrincipalAcademics?.phoneNumber}
                          </p>
                          <p>
                            <strong>OG Number:</strong> {school.vicePrincipalAcademics?.ogNumber}
                          </p>
                          <p>
                            <strong>TSC File Number:</strong>{" "}
                            {school.vicePrincipalAcademics?.tscFileNumber}
                          </p>
                          <p>
                            <strong>Date of Present Posting:</strong>{" "}
                            {school.vicePrincipalAcademics?.dateOfPresentPosting}
                          </p>
                          <p>
                            <strong>Date of First Appointment:</strong>{" "}
                            {getLongDate(school.vicePrincipalAcademics?.dateOfFirstAppointment)}
                          </p>
                          <p>
                            <strong>Date of Birth:</strong>{" "}
                            {getLongDate(school.vicePrincipalAcademics?.dateOfBirth)}
                          </p>
                          <p>
                            <strong>Date of Retirement:</strong>{" "}
                            {getLongDate(school.vicePrincipalAcademics?.dateOfRetirement)}
                          </p>
                          <p>
                            <strong>Grade Level:</strong>{" "}
                            {school.vicePrincipalAcademics?.gradeLevel}
                          </p>
                        </div>
                      ) : (
                        <p className="text-gray-500">Vacant</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
        <div className="flex justify-center mt-4">
          {currentPage !== 1 ? 
         ( <button
            onClick={() => {handlePageChange(currentPage - 1)}}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-700 text-white rounded-l"
          >
            Previous
          </button>) : (<></>)}
          <span className="px-4 py-2 bg-gray-700 text-white">
            Page {currentPage} of {totalPages}
          </span>
          {currentPage !== totalPages ? 
          (<button
            onClick={() => {handlePageChange(currentPage + 1)}}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-700 text-white rounded-r"
          >
            Next
          </button>) : (<></>)}
        </div>
      </div>
    </>
  );
};
