'use client'
import { Button } from '@repo/ui/button'
import Image from 'next/image'

function Component() {
    return (
        <>
            <div>
                <Image src="/www.google." alt="qegq" width={100} height={100} />
            </div>
            <Button className="text-mycolor bg-[red]" appName="hei hai">
                {`helllooooooooo`}
            </Button>
        </>
    )
}

export default Component
