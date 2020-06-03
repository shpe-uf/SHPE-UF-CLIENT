import React, { useContext, useState } from "react";
import { AuthContext } from "../context/auth";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag"

import {Grid, Form} from "semantic-ui-react";
import { PERMISSIONS } from "../util/permissions";



export default function PermissionsForm({userInfo}) {
    const [errors, setErrors] = useState({});

    const {user: loggedInUser} = useContext(AuthContext)
    console.log("Logged In User: " + loggedInUser.permission);
    const permission = []
    if (userInfo) {
        permission.push(userInfo.permission)
        console.log(permission)
    }

    // const [changePermissionMutation] = useMutation(CHANGE_PERMISSION, {
    //     onError(err) {
    //       setErrors(err.graphQLErrors[0].extensions.exception.errors);
    //     },
    //     onCompleted() {
    //       setPermission(user.permission);
    //       userInfo.permission = user.permission;
    //     }
    // });
    const onChange = (_, {value}) => {
        console.log(value)
    }
    //   function changePermission(value) {
    //     var values = {
    //       email: userInfo.email,
    //       currentEmail: user.email,
    //       permission: value
    //     }
    //     changePermissionMutation({ variables: values });
    //     user.permission = value;
    //   }

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
                                value={PERMISSIONS.TASKS}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.TASKS)}
                                onChange={onChange}
                                label='Tasks'
                            />
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.ADMIN)}
                                value={PERMISSIONS.REQUESTS}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.REQUESTS)}
                                label='Requests'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.ADMIN)}
                                value={PERMISSIONS.EVENTS}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.TASKS)}
                                label='Events'
                            />
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.ADMIN)}
                                value={PERMISSIONS.SUPER}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.SUPER)}
                                label='Super Admin'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.ADMIN)}
                                value={PERMISSIONS.STATS}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.STATS)}
                                label='Statistics'
                            />
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.ADMIN)}
                                value={PERMISSIONS.REIMB}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.REIMB)}
                                label='Reimbursements'
                            />
                            </Form.Group>
                        <Form.Group>
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.ADMIN)}
                                value={PERMISSIONS.MEMBERS}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.MEMBERS)}
                                label='Members'
                            />
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.ADMIN)}
                                value={PERMISSIONS.CORP}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.CORP)}
                                label='Corporate Database'
                            />
                        </Form.Group>
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