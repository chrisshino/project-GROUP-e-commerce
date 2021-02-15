const maxSize = {
    mobile: 688,
    tablet: 992,
};

const minSize = {
    desktop: 993
}

const device = {
    mobile: `(max-width: ${maxSize.mobile}px)`,
    tablet: `(max-width: ${maxSize.tablet}px)`,
    desktop: `(min-width: ${minSize.desktop}px)`,
};


export const onMobileMediaQuery = `
    @media ${device.mobile}
`;
export const onTabletMediaQuery = `
    @media ${device.tablet}
`;
export const onDesktopMediaQuery = `
    @media ${device.desktop}
`;
