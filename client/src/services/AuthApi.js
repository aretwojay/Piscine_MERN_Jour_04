import { getItem, addItem, removeItem } from './LocalStorage';
import React, { useEffect, useState } from 'react';

export function hasAuthentificated() {
    if (getItem("user"))
        return true;
    return false;
}

export function logout(){
    removeItem("user");
}