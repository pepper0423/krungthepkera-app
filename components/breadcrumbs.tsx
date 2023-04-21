import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from "next/link";
import Typography from '@mui/material/Typography';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

interface BreadcrumbProps {
    breadcrumb: { label: string; href?: string }[]; // update breadcrumb prop
}

const Breadcrumb = ({ breadcrumb }: BreadcrumbProps) => {
    return (
        <div className="bg-gray-400 w-full h-12 flex items-center pl-4">
            <div role="presentation" onClick={handleClick}>
                <Breadcrumbs separator=">" aria-label="breadcrumb" sx={{'& .MuiBreadcrumbs-separator': {fontSize: '1.2rem'} // set the font size of separator
          }}>
                    <Link href="/" className='text-gray-800 font-medium text-xl hover:underline'>หน้าแรก</Link>
                    {!!breadcrumb &&
                        breadcrumb.map((item, i) => (
                            <span key={i}>
                                {!!item.href ? (
                                    <Link href={item.href} className='text-gray-800 font-medium text-xl hover:underline'>{item.label}</Link> // use href prop here
                                ) : (
                                    <Typography color="text.primary" className='text-gray-800 font-medium cursor-pointer text-xl'>{item.label}</Typography> // use Typography for last link
                                )}
                            </span>
                        ))}
                </Breadcrumbs>
            </div>
        </div>
    );
};


export default Breadcrumb;
