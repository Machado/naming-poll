import { NextPage, GetStaticPropsContext } from "next";
import { useTranslations } from 'next-intl';
import LocaleSwitcher from "../components/LocaleSwitcher";

const List: NextPage = () => {
    const t = useTranslations('Index');

    return (
        <>
            <LocaleSwitcher />
            <p>{t('description')}</p>
        </>
    );
}

export default List;



export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`../messages/${locale}.json`)).default
        }
    };
}
