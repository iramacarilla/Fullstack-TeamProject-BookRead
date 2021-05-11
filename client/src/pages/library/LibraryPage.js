import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Responsive from 'react-responsive';
import ReadBooks from '../../components/library/readBooks/ReadBooks';
import ReadingBooks from '../../components/library/readingBooks/ReadingBooks';
import WillReadBooks from '../../components/library/willReadBooks/WillReadBooks';
import LibraryForm from '../../components/libraryForm/LibraryForm';
import LibraryPageStyled from './LibraryPagesStyled';
import LibraryModal from '../../components/libraryModal/LibraryModal';
import { getUsersBooksOperetion } from '../../redux/operations/bookOperation';
import {
    getWillRead,
    getNowRead,
    getFinishRead,
} from '../../redux/selectors/bookSelector';

const LibraryPage = memo(() => {
    const dispatch = useDispatch();
    const booksWillRead = useSelector(getWillRead);
    const bookNowRead = useSelector(getNowRead);
    const bookFinished = useSelector(getFinishRead);
    const isAuth = useSelector(state => state.auth.token);

    // useEffect(() => {
    //     isAuth && dispatch(getUsersBooksOperetion());
    //     // eslint-disable-next-line
    // }, []);

    const Tablet = props => <Responsive {...props} minWidth={768} />;
    const Mobile = props => <Responsive {...props} maxWidth={767} />;

    return (
        <LibraryPageStyled className="libraryPageStyled library">
            <Mobile>
                {bookFinished.length > 0 && <ReadBooks />}
                {bookNowRead.length > 0 && <ReadingBooks />}
                {booksWillRead.length > 0 ||
                bookNowRead.length > 0 ||
                bookFinished.length > 0 ? (
                    !!booksWillRead.length && <WillReadBooks />
                ) : (
                    <LibraryModal />
                )}
                <LibraryForm />
            </Mobile>

            <Tablet>
                <LibraryForm />
                {bookFinished.length > 0 && <ReadBooks />}
                {bookNowRead.length > 0 && <ReadingBooks />}
                {booksWillRead.length > 0 ||
                bookNowRead.length > 0 ||
                bookFinished.length > 0 ? (
                    !!booksWillRead.length && <WillReadBooks />
                ) : (
                    <LibraryModal />
                )}
            </Tablet>
        </LibraryPageStyled>
    );
});

export default LibraryPage;
