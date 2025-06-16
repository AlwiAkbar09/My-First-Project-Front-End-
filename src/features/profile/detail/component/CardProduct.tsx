export default function CardProduct({
    title,
    paragraph,
}: {
    title: string;
    paragraph: string;
}) {
    // {title, paragraph}
    return (
        <div
            style={{
                minWidth: "100px",
                maxWidth: "300px",
                backgroundColor: "gray",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <img
                    src={
                        "https://cdn-icons-png.flaticon.com/512/5434/5434171.png"
                    }
                    width={"100px"}
                    height={"100px"}
                />
                <h1 style={{ fontSize: "30px" }}>{title}</h1>
            </div>
            <div>
                <p style={{ maxWidth: "100px" }}>{paragraph}</p>
            </div>
            <div>
                <img />
            </div>
        </div>
    );
}
