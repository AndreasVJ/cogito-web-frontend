import styles from "../styles/Apply.module.css";
import Footer from "../components/Footer";
import ProjectMarkable from "../components/ProjectMarkable";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CreatableSelect from "react-select/creatable";
("usp=pp_url&entry.368733506=Simon&entry.1709808134=Lee&entry.1625194928=Simon&entry.911437074=Spill+AI&entry.911437074=Sikker+AI&entry.911437074=Cogitron&entry.911437074=Emojify&entry.911437074=Sjakk+AI&emailAddress=test@yahoo.com");

const Apply = () => {
    const [page, setPage] = useState(false);
    const [value, setValue] = useState<readonly Option[]>([]);
    const [projects, setProjets] = useState([]);
    const [surname, setSurname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [about, setAbout] = useState("");

    useEffect(() => {
        getData();
    }, []);

    const components = {
        DropdownIndicator: null,
    };

    interface Option {
        label: string;
        value: string;
    }

    const createOption = (label: string) => ({
        label,
        value: label,
    });

    const removeOption = (value) => {
        setValue((current) =>
            current.filter((option) => option.value != value)
        );
    };

    const getData = async () => {
        let rest_url = "/projects/all_new_projects/";
        const projectsResponse = await fetch(
            "http://127.0.0.1:8000/" + rest_url
        );
        const projectsData = await projectsResponse.json();
        setProjets(projectsData);
    };

    const sendForm = async (surname, lastname, email, about, projects) => {
        let url = "";
        projects.map((project) => {
            url += "&entry.911437074=" + project.value.replace(" ", "+");
        });
        try {
            await fetch(
                "https://docs.google.com/forms/d/e/1FAIpQLSfaNpwXHh55RweAfSW-_1QWXAfNj83vHLChu-pCNI0WvGhbjA/formResponse?" +
                    new URLSearchParams({
                        "entry.368733506": surname,
                        "entry.1709808134": lastname,
                        "entry.1625194928": about,
                        emailAddress: email,
                    }) +
                    url,
                {
                    mode: "no-cors",
                }
            );
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <div className={styles.main}>
                <motion.button
                    className={styles.projectButton}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        zIndex: page ? "1" : "2",
                        backgroundColor: page ? "#DFE4EA" : "white",
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.4,
                        ease: [0, 0.71, 0.2, 1.0],
                    }}
                    onClick={() => setPage(false)}
                >
                    <p className={styles.buttonTabText}>Prosjekter</p>
                </motion.button>
                <motion.button
                    className={styles.vervButton}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        zIndex: page ? "2" : "1",
                        backgroundColor: page ? "white" : "#DFE4EA",
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.4,
                        ease: [0, 0.71, 0.2, 1.0],
                    }}
                    onClick={() => setPage(true)}
                >
                    <p className={styles.buttonTabText}>Verv</p>
                </motion.button>
                <motion.div
                    className={styles.projectCard}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.4,
                        ease: [0, 0.71, 0.2, 1.0],
                    }}
                >
                    <div className={styles.projectTitle}>
                        <p>Prosjektsøknad - Høst 2023</p>
                    </div>

                    <div className={styles.projectInputCard}>
                        <div className={styles.projectFirstName}>
                            <p>Fornavn</p>
                            <p>Etternavn</p>
                        </div>
                        <input
                            className={styles.input}
                            style={{ width: "24vh", left: "3vh" }}
                            type="text"
                            onChange={(event) => setSurname(event.target.value)}
                        />
                        <input
                            className={styles.input}
                            style={{ width: "24vh", left: "5vh" }}
                            type="text"
                            onChange={(event) =>
                                setLastname(event.target.value)
                            }
                        />
                        <div className={styles.projectEmail}>
                            <p>Epost Adresse</p>
                        </div>
                        <input
                            className={styles.input}
                            style={{
                                width: "50vh",
                                left: "3vh",
                            }}
                            type="text"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <div className={styles.projectWhy}>
                            <p>Fortell oss litt om deg selv</p>
                        </div>
                        <textarea
                            className={styles.input}
                            style={{
                                width: "50vh",
                                left: "3vh",
                                height: "8vh",
                                resize: "none",
                                paddingTop: "1vh",
                            }}
                            onChange={(event) => setAbout(event.target.value)}
                        />
                        <div className={styles.projectChosen}>
                            <p>Valgte Prosjekter</p>
                        </div>

                        <div className={styles.projectsText}>
                            <p>
                                Velg ønsket prosjektprioritet{" "}
                                <a style={{ fontSize: "18px" }}>
                                    (Prioritert i rekkefølge)
                                </a>
                            </p>
                        </div>
                        <div className={styles.projects}>
                            {projects.map((project) => (
                                <ProjectMarkable
                                    title={project.title}
                                    desc={project.desc}
                                    image={project.image}
                                    key={project.title}
                                    setValue={() =>
                                        setValue((prev) => [
                                            ...prev,
                                            createOption(project.title),
                                        ])
                                    }
                                    removeValue={() =>
                                        removeOption(project.title)
                                    }
                                />
                            ))}
                        </div>
                        <div className={styles.applyButton}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={styles.button}
                                onClick={() =>
                                    sendForm(
                                        surname,
                                        lastname,
                                        email,
                                        about,
                                        value
                                    )
                                }
                            >
                                <p className={styles.buttonText}>Søk opptak</p>
                            </motion.button>
                        </div>
                        <div className={styles.selectorPosition}>
                            <CreatableSelect
                                styles={{
                                    control: (baseStyles, state) => ({
                                        ...baseStyles,
                                        borderStyle: state.isFocused
                                            ? "none"
                                            : "none",
                                        height: "8vh",
                                        backgroundColor: "#F1F2F6",
                                        borderRadius: "10px",
                                        filter: "drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.8))",
                                    }),
                                    multiValueRemove: (baseStyles) => ({
                                        ...baseStyles,
                                        display: "none",
                                    }),
                                    multiValueLabel: (baseStyles) => ({
                                        ...baseStyles,
                                        paddingRight: "1vh",
                                        fontSize: "16px",
                                        fontWeight: "700",
                                        color: "white",
                                        backgroundColor: "#ff6b81",
                                        filter: "drop-shadow(2px 2px 0px black)",
                                    }),
                                }}
                                components={components}
                                isClearable={false}
                                isMulti
                                isDisabled={true}
                                onChange={(newValue) => setValue(newValue)}
                                menuIsOpen={false}
                                placeholder="Trykk på et av prosjektene..."
                                value={value}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </>
    );
};

export default Apply;
