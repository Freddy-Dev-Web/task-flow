import Image from "next/image"
import reactLogo from '../../assets/react.svg'

export const Header = () => {
    return (
        <div className="flex justify-between items-center py-10 px-10 mb-20">      
            <div className="flex items-center gap-5">
                <Image src={reactLogo} alt="logo" width={50} height={50} />
                <div>
                    <h1>TaskFlow</h1>
                    <div className="color-gray">
                        <code>Eliminez le chaos, suivez le flux.</code>
                    </div>
                </div>
            </div>
            <code className="color-primary">
                v.1.0
            </code>
        </div>
    )
}