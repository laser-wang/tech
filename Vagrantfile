Vagrant.configure("2") do |config|
  config.vm.define :box11 do |box11|
    config.ssh.username = "vagrant"
    config.ssh.password = "vagrant"
    box11.vm.provider "virtualbox" do |v|
          v.customize ["modifyvm", :id, "--name", "box11", "--memory", "1024"]
    end
    box11.vm.box = "box11"
    box11.vm.hostname = "box11"
    box11.vm.network "public_network", bridge: "en0: Wi-Fi (AirPort)"
    box11.vm.provision "shell",run: "always",inline: "ifconfig eth1 192.168.10.121 netmask 255.255.0.0 up"
  end
end
