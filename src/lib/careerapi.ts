

const careerData = async () => {
    const response = await fetch("mongodb+srv://dolavalentino:8ylPQY3xG4Qacyjh@edu-all.dxvuu99.mongodb.net/edu-all--collectionCareer");
    const data = await response.json();
    return data;
}

export { careerData };