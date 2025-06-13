import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LuLayoutDashboard } from 'react-icons/lu';
import toast from 'react-hot-toast';

interface MenuItem {
    key: string;
    icon?: React.ReactNode;
    label: React.ReactNode;
    children?: MenuItem[];
}

const Sidebar: React.FC = () => {
    const location = useLocation();
    const path = location.pathname;
    const [selectedKey, setSelectedKey] = useState<string>('');
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    const navigate = useNavigate();

    const handleLogout = async () => {
        toast.success('Logout Successfully');
    };

    const menuItems: MenuItem[] = [
        { key: '/', icon: <LuLayoutDashboard size={24} />, label: <Link to="/banner">Banner</Link> }
    ];

    useEffect(() => {
        const selectedItem = menuItems.find((item) => item.key === path || item.children?.some((sub) => sub.key === path));
        if (selectedItem) {
            setSelectedKey(path);
            if (selectedItem.children) {
                setOpenKeys([selectedItem.key]);
            } else {
                const parentItem = menuItems.find((item) => item.children?.some((sub) => sub.key === path));
                if (parentItem) {
                    setOpenKeys([parentItem.key]);
                }
            }
        }
    }, [path]);

    const handleOpenChange = (keys: string[]) => {
        setOpenKeys(keys);
    };

    return (
        <div className="mt-5">
            <Link to={'/'} className="flex items-center justify-center py-4">
                <img 
                    src="https://play-lh.googleusercontent.com/va-SZATY08R3TmopXeQzLNeSXGMWmwh0CHjCuMOrLOWblN8FS6GqyS9J-Hpm4MUPLGQ=w240-h480-rw" 
                    alt="Logo"
                    style={{ width: 150, height: 150}} 
                />
            </Link>
            <Menu
                mode="inline"
                selectedKeys={[selectedKey]}
                openKeys={openKeys}
                onOpenChange={handleOpenChange}
                style={{ borderRightColor: 'transparent', background: 'transparent' }}
                items={menuItems}
            />
        </div>
    );
};

export default Sidebar;
