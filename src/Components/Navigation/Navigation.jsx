import React, {useState, useEffect} from 'react';
import { Flex, Button , Menu} from '@mantine/core';

import { IconQuestionMark, IconArchive, IconCreditCard, IconMessageCircle2, IconAddressBook, IconUsers } from '@tabler/icons-react';

const Navigation = ({phoneScreen, tabletScreen, smallComputerScreen, computerScreen, windowDimensions}) => {

    const {width, height} = windowDimensions;

    const perfectWidth = width / 2
    const perfectHeight = height / 16
  return (
    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
      gap="xl"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
      style={{width:`${width}px`, height:`${perfectHeight}px`}}
    >
        <div className="Left-Wrapper">
            <Flex
                mih={50}
                bg="rgba(0, 0, 0, 0)"
                gap="xs"
                justify="flex-start"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <Button color="green" radius="xl" size="xs" compact>
                    Home
                </Button>
                <Button color="cyan" radius="xl" size="xs" compact>
                    Log-In
                </Button>
            </Flex>
        </div>

        <div className="Middle-Wrapper">
            <Flex
                mih={perfectHeight}
                bg="rgba(0, 0, 0, 0)"
                gap="xs"
                justify="flex-start"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <Menu shadow="md" width={perfectWidth}>
                    <Menu.Target>
                        <Button color="cyan" radius="xl" size="xs" compact>Pages</Button>
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Label>Pages</Menu.Label>
                        <Menu.Divider/>
                        <Menu.Item icon={<IconQuestionMark size={14}/>}>About</Menu.Item>
                        <Menu.Divider/>
                        <Menu.Item icon={<IconArchive size={14}/>}>Projects</Menu.Item>
                        <Menu.Divider/>
                        <Menu.Item icon={<IconCreditCard size={14}/>}>Services</Menu.Item>
                        <Menu.Divider/>
                        <Menu.Item icon={<IconMessageCircle2 size={14}/>}>Blog</Menu.Item>
                        <Menu.Divider/>
                        <Menu.Item icon={<IconAddressBook size={14}/>}>Contact</Menu.Item>
                        <Menu.Divider/>
                        <Menu.Item icon={<IconUsers size={14}/>}>Testimonials</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Flex>
        </div>

        <div className="Right-Wrapper">
            <Flex
                mih={50}
                bg="rgba(0, 0, 0, 0)"
                gap="xs"
                justify="flex-start"
                align="center"
                direction="row"
                wrap="wrap"
            >
                <Button color="yellow" radius="xl" size="xs" compact>
                    Settings
                </Button>
                <Button color="red" radius="xl" size="xs" compact>
                    Sign-Out
                </Button>
            </Flex>
        </div>
    </Flex>
  )
}

export default Navigation