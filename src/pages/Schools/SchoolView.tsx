import { Navbar } from "components";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchSchools } from "../../services/schools.service";

interface ISchools {
    _id?: string;
    nameOfSchool: string;
    category: string;
    address: string;
    location: string;
    zone: string;
    division: string;
    listOfStaff: any;
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
                setError('Failed to fetch schools');
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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    // Calculate the indices of the first and last items to display
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedSchools = schools.slice(startIndex, endIndex);

    const totalPages = Math.ceil(schools.length / ITEMS_PER_PAGE);

    return (
        <>
            <Navbar />
            <div className="flex flex-col h-screen w-full bg-gray-900 mt-12 gap-2 justify-start p-5">
                {paginatedSchools.map(school => (
                    <div key={school._id} className="flex flex-col w-full">
                        <div 
                            className="flex flex-row justify-between items-center min-h-[20px] bg-gray-700 w-full p-1 z-3 cursor-pointer"
                            onClick={() => {handleToggle(school._id!)}}
                        >
                            <p className="text-white">{school.nameOfSchool}</p>
                            <h5 className="text-white">{openSchoolId === school._id ? '-' : '+'}</h5>
                        </div>
                        <AnimatePresence>
                            {openSchoolId === school._id && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 'auto' }}
                                    exit={{ height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden bg-gray-200 w-full p-1"
                                >
                                    <div className="bg-white max-h-[500px] w-inherit overflow-auto">
                                        {/* Display details of the school */}
                                        <p className="text-black">{school.nameOfSchool}</p>
                                        {/* Add other details if needed */}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
                <div className="flex justify-center mt-4">
                    <button
                        onClick={() => {handlePageChange(currentPage - 1)}}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-700 text-white rounded-l"
                    >
                        Previous
                    </button>
                    <span className="px-4 py-2 bg-gray-700 text-white">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => {handlePageChange(currentPage + 1)}}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-700 text-white rounded-r"
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
};
