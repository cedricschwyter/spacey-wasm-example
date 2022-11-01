import React, { ChangeEvent, useEffect } from "react";
import {
    Textarea
} from '@chakra-ui/react'
import { Interpreter, InterpreterConfig } from 'node-spacey';

const Home: React.FC = () => {
    useEffect(() => {
        var interpreter = Interpreter.new(InterpreterConfig.from_source(`
   	



`, 0, false, false, false, false));
        interpreter.run();
        console.count('ran');
    });
    return null;
};

export default Home;
