import { Button, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'

const Facial = () => {
    let faceio

    useEffect(() => {
        faceio = new faceIO('fioad549')
    }, [])

    const handleSignIn = async () => {
        try {
            let response = await faceio.enroll({
                locale: 'auto',
                userConsent: false,
                payload: {
                    /* The payload we want to associate with this particular user
                     * which is forwarded back to us on each of his future authentication...
                     */
                    whoami: 123456, // Example of dummy ID linked to this particular user
                    email: 'nocountry.s5.04.ft.python@gmail.com',
                },
            })

            alert(` Unique Facial ID: ${response.facialId}
                Enrollment Date: ${response.timestamp}
                Gender: ${response.details.gender}
                Age Approximation: ${response.details.age}`)
        } catch (error) {
            console.log(error)
        }
    }
    const handleLogIn = async () => {
        try {
            let response = await faceio.authenticate({
                locale: 'auto',
            })
            console.log(` Unique Facial ID: ${response.facialId}
          PayLoad: ${response.payload}
          `)
        } catch (error) {
            console.log(error)
        }
    }

    const handleError = (errCode) => {
        try {
            handleLogIn()
            handleSignIn()
        } catch (error) {
            switch (errCode) {
                case fioErrCode.PERMISSION_REFUSED:
                    alert(
                        'Access to the Camera stream was denied by the end user'
                    )
                    break
                case fioErrCode.NO_FACES_DETECTED:
                    alert(
                        'No faces were detected during the enroll or authentication process'
                    )
                    break
                case fioErrCode.UNRECOGNIZED_FACE:
                    alert(
                        "Unrecognized face on this application's Facial Index"
                    )
                    break
                case fioErrCode.MANY_FACES:
                    alert(
                        'Two or more faces were detected during the scan process'
                    )
                    break
                case fioErrCode.FACE_DUPLICATION:
                    alert(
                        'User enrolled previously (facial features already recorded). Cannot enroll again!'
                    )
                    break
                case fioErrCode.PAD_ATTACK:
                    alert(
                        'Presentation (Spoof) Attack (PAD) detected during the scan process'
                    )
                    break
                case fioErrCode.FACE_MISMATCH:
                    alert(
                        'Calculated Facial Vectors of the user being enrolled do not matches'
                    )
                    break
                case fioErrCode.WRONG_PIN_CODE:
                    alert(
                        'Wrong PIN code supplied by the user being authenticated'
                    )
                    break
                case fioErrCode.PROCESSING_ERR:
                    alert('Server side error')
                    break
                case fioErrCode.UNAUTHORIZED:
                    alert(
                        'Your application is not allowed to perform the requested operation (eg. Invalid ID, Blocked, Paused, etc.). Refer to the FACEIO Console for additional information'
                    )
                    break
                case fioErrCode.TERMS_NOT_ACCEPTED:
                    alert(
                        'Terms & Conditions set out by FACEIO/host application rejected by the end user'
                    )
                    break
                case fioErrCode.UI_NOT_READY:
                    alert(
                        'The FACEIO Widget could not be (or is being) injected onto the client DOM'
                    )
                    break
                case fioErrCode.SESSION_EXPIRED:
                    alert(
                        'Client session expired. The first promise was already fulfilled but the host application failed to act accordingly'
                    )
                    break
                case fioErrCode.TIMEOUT:
                    alert(
                        'Ongoing operation timed out (eg, Camera access permission, ToS accept delay, Face not yet detected, Server Reply, etc.)'
                    )
                    break
                case fioErrCode.TOO_MANY_REQUESTS:
                    alert(
                        'Widget instantiation requests exceeded for freemium applications. Does not apply for upgraded applications'
                    )
                    break
                case fioErrCode.EMPTY_ORIGIN:
                    alert(
                        'Origin or Referer HTTP request header is empty or missing'
                    )
                    break
                case fioErrCode.FORBIDDDEN_ORIGIN:
                    alert(
                        'Domain origin is forbidden from instantiating fio.js'
                    )
                    break
                case fioErrCode.FORBIDDDEN_COUNTRY:
                    alert(
                        'Country ISO-3166-1 Code is forbidden from instantiating fio.js'
                    )
                    break
                case fioErrCode.SESSION_IN_PROGRESS:
                    alert(
                        'Another authentication or enrollment session is in progress'
                    )
                    break
                case fioErrCode.NETWORK_IO:
                default:
                    alert(
                        'Error while establishing network connection with the target FACEIO processing node'
                    )
                    break
            }
        }
    }

    return (
        <Stack>
            <Stack>
                <Typography variant="h4" textAlign={'center'}>
                    Inicia sesión con reconocimiento facial
                </Typography>
                <Typography textAlign={'center'}>
                    Por favor registra tu cara para poder iniciar sesión la
                    próxima vez
                </Typography>
            </Stack>

            <Stack
                margin="2rem"
                width={'100%'}
                justifyContent="center"
                alignItems={'center'}
                gap={'1rem'}
            >
                <Button variant="outlined" width="auto" onClick={handleSignIn}>
                    SignIn
                </Button>
                <Button variant="outlined" width="auto" onClick={handleLogIn}>
                    LogIn
                </Button>
            </Stack>
        </Stack>
    )
}

export default Facial
