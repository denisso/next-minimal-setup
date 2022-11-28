import Image from "next/image";
export const Component = () => {
    return (
        <>
            <div>
                <Image
                    src="https://res.cloudinary.com/mrdramm/image/upload/v1659598817/cld-sample-5.jpg"
                    width="600"
                    layout="fill"
                />{" "}
            </div>
        </>
    );
};
