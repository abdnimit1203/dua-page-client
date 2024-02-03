

const BottomNavbar = () => {
    return (
        <div>
        <div className="space-y-4">
        <Image src={home} alt="logo" width={38} height={38} className="rounded-full  cursor-pointer"></Image>
        <Image src={allduas} alt="logo" width={38} height={38} className="rounded-full  cursor-pointer"></Image>
        <Image src={memorise} alt="logo" width={38} height={38} className="rounded-full  cursor-pointer"></Image>
        <Image src={bookmark} alt="logo" width={38} height={38} className="rounded-full  cursor-pointer"></Image>
        <Image src={ruqyah} alt="logo" width={38} height={38} className="rounded-full  cursor-pointer"></Image>
        <Image src={qa} alt="logo" width={38} height={38} className="rounded-full  cursor-pointer"></Image>
        <Image src={book} alt="logo" width={38} height={38} className="rounded-full  cursor-pointer"></Image>
        </div>
        </div>
    );
};

export default BottomNavbar;