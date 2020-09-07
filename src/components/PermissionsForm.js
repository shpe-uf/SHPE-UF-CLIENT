import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/auth";
import { useMutation, useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag"

import {Grid, Form, Button, Message} from "semantic-ui-react";
import { PERMISSIONS } from "../util/permissions";


// TODO
// It is essential that we're able to refetch the user after the permissions have been changed

let originalPermissions = []

export default function PermissionsForm({userInfo, refetch}) {
    const [errors, setErrors] = useState({});
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [permissions, setPermissions] = useState(userInfo.permission);

    // get the current user, query the database to get the permissions of that
    // user, and update the object with those permissions.
    let {user: loggedInUser} = useContext(AuthContext)
    let {data: {getUser:{permission}}} = useQuery(FETCH_USER_QUERY, {
        variables: {
            userId: loggedInUser.id
        }
    })
    loggedInUser.permission = permission
    originalPermissions = userInfo.permission.split("-")


    const [changePermissionMutation, other] = useMutation(CHANGE_PERMISSION, {
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        update(cache,data) { 
            console.log("updated too")
            originalPermissions = userInfo.permission.split("-")
            refetch()
        }
    });

    const areEqual = (a, b) => {
        if (a.length == b.length) {
            if (a.every((value, index) => value === b[index])) {
                return true
            }
        }
        return false
    }

    const onChange = (_, {name, checked}) => {
        //regex used to remove a permissions from the string formatted as "permission-permission-permission"
        //accounts for the three possible ways in which a permission is found, namely at the beginning, inside, or the end
        // let re = new RegExp(`/(-${name}-)|(${name}-)|(-${name})/`)
        let re = new RegExp(`(-${name}-)|(${name}-)|(-${name})|(${name})`, 'g')
        let tempPermissions = ''

        if (checked){
            tempPermissions = permissions.concat( (permissions.length !== 0) ? `-${name}` : `${name}`)
        } else {
            tempPermissions = permissions.replaceAll(re, '')
        }

        //if the permissions revert back to original and there were errors, reset them
        if (areEqual(originalPermissions.sort(), tempPermissions.split('-').sort())) {
            setErrors({})
        }
        setPermissions(tempPermissions)
        setButtonDisabled(areEqual(originalPermissions.sort(), tempPermissions.split('-').sort()))
    };

    const onSubmit = () => {
        setButtonDisabled(true)
        changePermission()
    }

    const changePermission = () => {
        const values = {
            email: userInfo.email,
            currentEmail: loggedInUser.email,
            permission: permissions
        }
        changePermissionMutation({variables: values})
    }

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <h3>Permissions</h3>
                    <Form 
                        onSubmit={onSubmit}
                        widths='equal'
                        error={Object.keys(errors).length !== 0 && errors.constructor === Object}
                    >
                        <Form.Group>
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.SUPER)}
                                name={PERMISSIONS.TASKS}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.TASKS)}
                                onChange={onChange}
                                label='Tasks'
                            />
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.SUPER)}
                                name={PERMISSIONS.REQUESTS}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.REQUESTS)}
                                onChange={onChange}
                                label='Requests'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.SUPER)}
                                name={PERMISSIONS.EVENTS}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.TASKS)}
                                onChange={onChange}
                                label='Events'
                            />
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.SUPER)}
                                name={PERMISSIONS.SUPER}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.SUPER)}
                                onChange={onChange}
                                label='Super Admin'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.SUPER)}
                                name={PERMISSIONS.STATS}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.STATS)}
                                onChange={onChange}
                                label='Statistics'
                            />
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.SUPER)}
                                name={PERMISSIONS.REIMB}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.REIMB)}
                                onChange={onChange}
                                label='Reimbursements'
                            />
                            </Form.Group>
                        <Form.Group>
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.SUPER)}
                                name={PERMISSIONS.MEMBERS}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.MEMBERS)}
                                onChange={onChange}
                                label='Members'
                            />
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.SUPER)}
                                name={PERMISSIONS.CORP}
                                defaultChecked={userInfo.permission.includes(PERMISSIONS.CORP)}
                                onChange={onChange}
                                label='Corporate Database'
                            />
                        </Form.Group>
                        <Message
                            error
                            header='Action Forbidden'
                            content= {
                                errors.general
                            }
                        />
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
  mutation changePermission($email: String!, $currentEmail: String!, $permission: String!) 
  {
    changePermission(email: $email, currentEmail: $currentEmail, permission: $permission){
        permission
    }
  }
`;

const FETCH_USER_QUERY = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      permission
    }
  }
`;
