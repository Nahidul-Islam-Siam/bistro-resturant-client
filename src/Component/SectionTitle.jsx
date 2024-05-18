

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md: w-3/12 mx-auto text-center my-8">
            <p className="text-[#D99904] mb-2">---{subHeading}---</p>
            <p className="text-3xl py-4 uppercase border-y-4">{heading}</p>
            
        </div>
    );
};

export default SectionTitle;