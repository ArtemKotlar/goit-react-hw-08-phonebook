import { Box } from "components/Box"
import Filter from "components/Filter/Filter"
import Forms from "components/Forms/Forms"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchContacts } from "redux/contacts/options"

export const ContactPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
    dispatch(fetchContacts())
    }, [dispatch])

    return(
        <Box>
            <h2>PhoneBook</h2>
            <Forms>
                <h2>Contactlist</h2>
                <Filter/>
            </Forms>
        </Box>
    )
}