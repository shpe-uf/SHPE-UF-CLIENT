import React, { useContext, useState } from "react";
import { AuthContext } from "../context/auth";
import { useMutation, useQuery } from "@apollo/client";
import gql from "graphql-tag"

import {Grid, Form, Button, Message} from "semantic-ui-react";
import { PERMISSIONS } from "../util/permissions";


export default function PermissionsForm({userInfo, refetch}) {
    const [errors, setErrors] = useState({});
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [permissions, setPermissions] = useState(userInfo.permission);
    const [originalPermissions, setOriginalPermissions] = useState(userInfo.permission.split("-"));
    // get the current user, query the database to get the permissions of that
    // user, and update the object with those permissions.
    let {user: loggedInUser} = useContext(AuthContext)
    let {data: {getUser:{permission}}} = useQuery(FETCH_USER_QUERY, {
        variables: {
            userId: loggedInUser.id
        }
    })
    loggedInUser.permission = permission

    const [changePermissionMutation] = useMutation(CHANGE_PERMISSION, {
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        update(cache,{data:{changePermission:{permission}}}) { 
            setOriginalPermissions(permission.split("-"))
        }
    });

    const areEqual = (a, b) => {
        if (a.length === b.length) {
            if (a.every((value, index) => value === b[index])) {
                return true
            }
        }
        return false
    }

    const onChange = (_, {name, checked}) => {
        //regex used to remove a permissions from the string formatted as "permission-permission-permission"
        //accounts for the three possible ways in which a permission is found, namely at the beginning, inside, or the end
        let re1 = new RegExp(`(-${name}-)`, 'g')
        let re2 = new RegExp(`(${name}-)|(-${name})|(${name})`, 'g')
        let tempPermissions = ''

        if (checked){
            if (name === PERMISSIONS.SUPER) {
                tempPermissions = PERMISSIONS.SUPER;
            } else {
                tempPermissions = permissions.concat( (permissions.length !== 0) ? `-${name}` : `${name}`)
            }
        } else {
            if (name === PERMISSIONS.SUPER) {
                tempPermissions = userInfo.permission.includes(PERMISSIONS.SUPER) ? '' : userInfo.permission;
            } else {
                tempPermissions = permissions.replaceAll(re1, '-')
                tempPermissions = permissions.replaceAll(re2, '')
            }
        }

        // In this scenario, if a user is simply a member and they are granted any other permission (an admin role), then they lose
        // their member permission in favor of the higher admin role. The inverse is true if a user is demoted to member only.
        if (name !== PERMISSIONS.MEMBER && tempPermissions.includes(PERMISSIONS.MEMBER)) {
            tempPermissions = name;
        } else if (name === PERMISSIONS.MEMBER) {
            tempPermissions = PERMISSIONS.MEMBER;
        }

        // In this scenario, this is a regular use that has been granted a permission for the first time (that is not super).
        // We automatically make that user an admin, granted that the user already contains at least one permission
        if (!tempPermissions.includes(PERMISSIONS.ADMIN) && tempPermissions.length > 0 && name !== PERMISSIONS.MEMBER) {
            tempPermissions = PERMISSIONS.ADMIN.concat("-" + tempPermissions);
        }

        // In this scenario, the user has been stripped of all permissions, and only admin is left.
        // This means that we must strip the user of all permissions, so that it is only a regular user.
        if (tempPermissions.includes(PERMISSIONS.ADMIN) && tempPermissions.length <= (PERMISSIONS.ADMIN.length + 2)) { 
            tempPermissions = ''
        }

        // If the permissions revert back to original and there were errors, reset them
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
        setOriginalPermissions(permissions.split("-"));
        console.log(values);
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
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.SUPER)
                                    || permissions.includes(PERMISSIONS.SUPER)}
                                name={PERMISSIONS.TASKS}
                                checked={permissions.includes(PERMISSIONS.TASKS)
                                    && !permissions.includes(PERMISSIONS.SUPER)}
                                onChange={onChange}
                                label='Tasks'
                            />
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.SUPER)
                                    || permissions.includes(PERMISSIONS.SUPER)}
                                name={PERMISSIONS.REQUESTS}
                                checked={permissions.includes(PERMISSIONS.REQUESTS)
                                    && !permissions.includes(PERMISSIONS.SUPER)}
                                onChange={onChange}
                                label='Requests'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.SUPER)
                                    || permissions.includes(PERMISSIONS.SUPER)}
                                name={PERMISSIONS.EVENTS}
                                checked={permissions.includes(PERMISSIONS.EVENTS)
                                    && !permissions.includes(PERMISSIONS.SUPER)}
                                onChange={onChange}
                                label='Events'
                            />
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.SUPER)}
                                name={PERMISSIONS.SUPER}
                                checked={permissions.includes(PERMISSIONS.SUPER)}
                                onChange={onChange}
                                label='Super Admin'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.SUPER)
                                    || permissions.includes(PERMISSIONS.SUPER)}
                                name={PERMISSIONS.STATS}
                                checked={permissions.includes(PERMISSIONS.STATS)
                                    && !permissions.includes(PERMISSIONS.SUPER)}
                                onChange={onChange}
                                label='Statistics'
                            />
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.SUPER)
                                    || permissions.includes(PERMISSIONS.SUPER)}
                                name={PERMISSIONS.REIMB}
                                checked={permissions.includes(PERMISSIONS.REIMB)
                                    && !permissions.includes(PERMISSIONS.SUPER)}
                                onChange={onChange}
                                label='Reimbursements'
                            />
                            </Form.Group>
                        <Form.Group>
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.SUPER)
                                    || permissions.includes(PERMISSIONS.SUPER)}
                                name={PERMISSIONS.MEMBER}
                                checked={permissions.includes(PERMISSIONS.MEMBER)
                                    && !permissions.includes(PERMISSIONS.SUPER)}
                                onChange={onChange}
                                label='Member'
                            />
                            <Form.Radio
                                toggle
                                disabled={!loggedInUser.permission.includes(PERMISSIONS.SUPER)
                                    || permissions.includes(PERMISSIONS.SUPER)}
                                name={PERMISSIONS.CORP}
                                checked={permissions.includes(PERMISSIONS.CORP)
                                    && !permissions.includes(PERMISSIONS.SUPER)}
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
