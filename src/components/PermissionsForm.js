import React, { useContext, useState } from "react";
import { AuthContext } from "../context/auth";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag"

import {Grid, Form, Button} from "semantic-ui-react";
import { PERMISSIONS } from "../util/permissions";


let originalPermissions = []


export default function PermissionsForm({userInfo}) {
    const [errors, setErrors] = useState({});
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [permissions, setPermissions] = useState({
        admin: userInfo.permission.includes(PERMISSIONS.ADMIN),
        super: userInfo.permission.includes(PERMISSIONS.SUPER),
        members: userInfo.permission.includes(PERMISSIONS.MEMBERS),
        events: userInfo.permission.includes(PERMISSIONS.EVENTS),
        tasks: userInfo.permission.includes(PERMISSIONS.TASKS),
        requests: userInfo.permission.includes(PERMISSIONS.REQUESTS),
        statistics: userInfo.permission.includes(PERMISSIONS.STATS),
        corporateDatabase: userInfo.permission.includes(PERMISSIONS.CORP),
        reimbursements: userInfo.permission.includes(PERMISSIONS.REIMB)
    });

    const {user: loggedInUser} = useContext(AuthContext)
    let currentPermissions = []

    if (userInfo) {
        originalPermissions = userInfo.permission.split("-");

        for(let key in permissions) {
            if (permissions[key]) {
                currentPermissions.push(key)
            }
        }
    }
    // const [changePermissionMutation] = useMutation(CHANGE_PERMISSION, {
    //     onError(err) {
    //       setErrors(err.graphQLErrors[0].extensions.exception.errors);
    //     },
    //     onCompleted() {
    //       setPermissions(user.permission);
    //       userInfo.permission = user.permission;
    //     }
    // });

    const areEqual = (a, b) => {
        if (a.length == b.length) {
            if (a.every((value, index) => value === b[index])) {
                return true
            }
        }
        return false
    }

    const onChange = (_, {name, checked}) => {

        if (checked){
            currentPermissions.push(name)
        } else {
            currentPermissions.splice(currentPermissions.indexOf(name), 1);
        }

        console.log(originalPermissions.sort())
        console.log(currentPermissions.sort())

        setPermissions({ ...permissions, [name]: checked });
        setButtonDisabled(areEqual(originalPermissions.sort(), currentPermissions.sort()))

    };

    // const onChange = (_, {checked, value}) => {
    //     if (checked){
    //         currentPermissions.push(value);
    //         setPermissions(currentPermissions);
    //         console.log(currentPermissions)
    //     } else {
    //         console.log("Unchecked")
    //         console.log(currentPermissions)
    //         // console.log(currentPermissions.indexOf(value))
    //         // currentPermissions.splice(currentPermissions.indexOf(value), 1);
    //     }
    //     // if (currentPermissions.includes(value)) { 
    //     //     if (userInfo) {
    //     //         currentPermissions.splice(currentPermissions.indexOf(value), 1);
    //     //     }
    //     // } else {
    //     //     if (userInfo) {
    //     //         currentPermissions.push(value);
    //     //     }
    //     // }

    //     // console.log(currentPermissions)
    //     // console.log(originalPermissions)
    //     // console.log('-------------------------')

    //     setButtonDisabled(currentPermissions.sort() === originalPermissions.sort())
    // }

    // function changePermission(value) {
    //   var values = {
    //     email: userInfo.email,
    //     currentEmail: user.email,
    //     permission: value
    //   }
    //   changePermissionMutation({ variables: values });
    //   user.permission = value;
    // }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <h3>Permissions</h3>
                    <Form widths='equal'>
                        <Form.Group>
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.ADMIN)}
                                name={PERMISSIONS.TASKS}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.TASKS)}
                                onChange={onChange}
                                label='Tasks'
                            />
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.ADMIN)}
                                name={PERMISSIONS.REQUESTS}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.REQUESTS)}
                                onChange={onChange}
                                label='Requests'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.ADMIN)}
                                name={PERMISSIONS.EVENTS}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.TASKS)}
                                onChange={onChange}
                                label='Events'
                            />
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.ADMIN)}
                                name={PERMISSIONS.SUPER}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.SUPER)}
                                onChange={onChange}
                                label='Super Admin'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.ADMIN)}
                                name={PERMISSIONS.STATS}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.STATS)}
                                onChange={onChange}
                                label='Statistics'
                            />
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.ADMIN)}
                                name={PERMISSIONS.REIMB}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.REIMB)}
                                onChange={onChange}
                                label='Reimbursements'
                            />
                            </Form.Group>
                        <Form.Group>
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.ADMIN)}
                                name={PERMISSIONS.MEMBERS}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.MEMBERS)}
                                onChange={onChange}
                                label='Members'
                            />
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.ADMIN)}
                                name={PERMISSIONS.CORP}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.CORP)}
                                onChange={onChange}
                                label='Corporate Database'
                            />
                        </Form.Group>
                        {buttonDisabled 
                        ?('') 
                        : (
                            <Button
                                floated='right'
                                type='submit'
                                content='Apply'
                            />
                        )}
                        
                    </Form>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

const CHANGE_PERMISSION = gql`
  mutation changePermission($email: String!, $currentEmail: String!, $permission: String!) {
    changePermission(email: $email, currentEmail: $currentEmail, permission: $permission)
  }
`;