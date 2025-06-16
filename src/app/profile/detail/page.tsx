import CardProduct from "../../../features/profile/detail/component/CardProduct";
import Link from "next/link";

CardProduct;

export default function DetailPage() {
    return (
        <>
            <div style={{ display: "flex" }}>
                <CardProduct
                    title={"Purwadhika School"}
                    paragraph={"Lorem ipsum"}
                />
                <CardProduct
                    title={"Web Development"}
                    paragraph={"Lorem ipsum"}
                />

                <Link href={"/login"}>Back to Login</Link>
            </div>
        </>
    );
}

// Props: Hanya mengirim data dari parent menuju ke child
