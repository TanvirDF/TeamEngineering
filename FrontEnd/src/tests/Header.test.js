import { render, screen } from "@testing-library/react";
import Header from "../Components/Header";
import React from "react";

describe(`header tests`, () => {
  
    test(`That the DFX logo is rendered`, () => {
        render(
            <Header />
        );

        expect(screen.getByTestId("dfx-logo")).toBeInTheDocument();
    });

    // test(`That the Need Help link is rendered`, () => {
    //     render(
    //         <Header />
    //     );

    //     expect(screen.getByTestId("need-help-link")).toBeInTheDocument();
    // });

    // test(`That the Menu link is rendered`, () => {
    //     render(
    //         <Header />
    //     );

    //     expect(screen.getByTestId("menu-link")).toBeInTheDocument();
    // });

    // test(`That the profile picture is rendered`, () => {
    //     render(
    //         <Header />
    //     );

    //     expect(screen.getByTestId("profile-pic-nav")).toBeInTheDocument();
    // });

});
